import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Header = ({ className }: HeaderProps) => {
    return (
        <div className={cn("header", className)}>
            <Link href="/" className="md:flex-1">
                <Image
                    src="/assets/icons/logo.png"
                    alt="Logo with name"
                    width={200}
                    height={50}
                    className="hidden md:block"
                />
                <Image
                    src="/assets/icons/logo-icon.png"
                    alt="Logo"
                    width={32}
                    height={32}
                    className="mr-2 md:hidden"
                />
            </Link>
        </div>
    );
};

export default Header;