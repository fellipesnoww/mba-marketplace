import logoImg from "@/assets/logo.png"

export function Logo() {
    return (
        <div className="flex flex-row items-center justify-between w-[270px]">
            <img src={logoImg} alt=""/>
            <div>
                <h1 className="font-title-md">Marketplace</h1>
                <span className="font-body-md">Painel de Vendedor</span>
            </div>
        </div>
    )
}