
import { Skeleton } from "@/components/ui/skeleton";

export default function HeroCarouselSkeleton() {
    return (
        <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
            {/*  Skeleton for a single slide  */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full">
                    <Skeleton className="w-full h-full" />
                </div>
            </div>
        </div>
    );
} 