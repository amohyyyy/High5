import Link from "next/link";
import { Icons } from "./icons";

export default function Footer() {
    return (
        <footer className="border-t">
            <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <Icons.logo className="h-6 w-6 text-primary" />
                    <p className="text-center text-sm leading-loose md:text-left">
                        © {new Date().getFullYear()} High5. جميع الحقوق محفوظة.
                    </p>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <Link href="#" className="hover:text-foreground">سياسة الخصوصية</Link>
                    <Link href="#" className="hover:text-foreground">شروط الخدمة</Link>
                </div>
            </div>
        </footer>
    );
}
