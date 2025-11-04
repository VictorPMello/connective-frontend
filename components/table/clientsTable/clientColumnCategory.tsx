import { Badge } from "@/components/ui/badge";
import { ClientCategory } from "@/types/client/clientType";

const categoryConfig = {
  BASIC: {
    color: "text-slate-700 dark:text-slate-300",
    bgColor:
      "bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700",
    label: "BASIC",
  },
  PREMIUM: {
    color: "text-amber-700 dark:text-amber-400",
    bgColor:
      "bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800",
    label: "PREMIUM",
  },
  ENTERPRISE: {
    color: "text-indigo-700 dark:text-indigo-400",
    bgColor:
      "bg-indigo-50 dark:bg-indigo-950 border-indigo-200 dark:border-indigo-800",
    label: "ENTERPRISE",
  },
};

export function ClientColumnCategory({
  category,
}: {
  category: ClientCategory;
}) {
  const config = categoryConfig[category];

  return (
    <Badge
      variant="outline"
      className={`px-2 py-1 ${config.color} ${config.bgColor}`}
    >
      <span className="capitalize">{config.label}</span>
    </Badge>
  );
}
