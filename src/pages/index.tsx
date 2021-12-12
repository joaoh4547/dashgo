import { Flex, Button, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
interface SiginFormData {
    email: string;
    password: string;
}

const sigInFormSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail invalido"),
    password: yup.string().required("Senha obrigatória"),
});

export default function SignIn() {
    const { register, handleSubmit, formState } = useForm<SiginFormData>({
        resolver: yupResolver(sigInFormSchema),
    });

    console.log(formState.errors);

    const handleSignIn: SubmitHandler<SiginFormData> = async (
        data: SiginFormData,
        event
    ) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(data);
    };

    return (
        <Flex w="100vw" h="100vh" align="center" justify="center">
            <Flex
                as="form"
                width="100%"
                maxW={360}
                bg="gray.800"
                p="8"
                borderRadius={8}
                flexDir="column"
                onSubmit={handleSubmit(handleSignIn)}
            >
                <Stack spacing="4">
                    <Input
                        type="email"
                        name="email"
                        label="E-mail"
                        error={formState.errors.email}
                        {...register("email")}
                    />
                    <Input
                        error={formState.errors.password}
                        type="password"
                        name="password"
                        label="Senha"
                        {...register("password")}
                    />
                </Stack>
                <Button
                    isLoading={formState.isSubmitting}
                    type="submit"
                    mt="6"
                    colorScheme="pink"
                    size="lg"
                >
                    Entrar
                </Button>
            </Flex>
        </Flex>
    );
}
