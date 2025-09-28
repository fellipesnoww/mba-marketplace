import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SignIn() {
    return (
        <div className="px-20 py-18 bg-white rounded-4xl max-w-[560px] flex">
            <div className="flex flex-col w-full">
                <div className="mb-12">
                    <h1 className="font-title-md">Acesse sua conta</h1>
                    <span className="font-body-sm">Informe seu e-mail e senha para entrar</span>
                </div>

                <form>
                    <span className="font-label-md">e-mail</span>
                    <Input 
                        className="font-body-md"
                        placeholder="Seu e-mail cadastrado"
                        type="email"
                    />
                    <span className="font-label-md">senha</span>
                    <Input
                        className="font-body-md"
                        placeholder="Sua senha de acesso" 
                        type="password"
                    />

                    <Button className="w-full bg-primary mt-12">Acessar</Button>
                </form>
                <footer className="flex flex-col items-start gap-5 mt-20">
                    <span className="font-body-sm">Informe seu e-mail e senha para entrar</span>
                    <Button 
                        variant="outline"
                        className="bg-transparent border-primary text-primary w-full"
                    >
                        Cadastrar
                    </Button>
                </footer>
            </div>
        </div>
    )
}