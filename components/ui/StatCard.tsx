import { IconType } from "react-icons";

interface StatCardProps {
    title: string;
    value: string | number;
    subValue?: string | number;
    subLabel?: string;
    icon: IconType;
    trend?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, subValue, subLabel, icon: Icon, trend }) => (
    <div className="relative overflow-hidden rounded-xl bg-neutral-800/30 backdrop-blur-xl">
        <div className="absolute inset-0 opacity-20"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
        />
        <div className="relative p-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-neutral-200">{title}</h3>
                <Icon />
            </div>
            <div className="space-y-2">
                <div className="text-2xl font-bold text-white">{value}</div>
                {subValue && (
                    <div className="text-xs text-neutral-400">
                        {subLabel}: {subValue}
                    </div>
                )}
                {trend && (
                    <div className="text-xs text-emerald-500">{trend}</div>
                )}
            </div>
        </div>
    </div>
);