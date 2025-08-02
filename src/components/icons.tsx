import type { SVGProps } from "react";
import { BookOpenCheck } from 'lucide-react';

export const Icons = {
  logo: (props: SVGProps<SVGSVGElement>) => (
    <BookOpenCheck {...props} />
  ),
};
