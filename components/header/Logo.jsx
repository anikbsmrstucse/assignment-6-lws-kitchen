import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/" className="text-3xl font-bold">
            <Image
                src="/assets/lws-kitchen.png"
                width={100}
                height={40}
                alt="logo"
            />
        </Link>
    );
};

export default Logo;
