import {
  IconCircleCheckFilled,
  IconCircleDashed,
  IconEye,
  IconLoader,
} from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import { ClientStatus } from "@/types/client/clientType";

const statusConfig = {
  ACTIVE: {
    icon: IconCircleCheckFilled,
    color: "text-green-700 dark:text-green-400",
    bgColor:
      "bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800",
    label: "ACTIVE",
  },
  NEGOTIATION: {
    icon: IconLoader,
    color: "text-blue-700 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800",
    label: "NEGOTIATION",
  },
  INACTIVE: {
    icon: IconCircleDashed,
    color: "text-gray-700 dark:text-gray-400",
    bgColor: "bg-gray-50 dark:bg-gray-950 border-gray-200 dark:border-gray-800",
    label: "INACTIVE",
  },
  PROSPECTUS: {
    icon: IconEye,
    color: "text-purple-700 dark:text-purple-400",
    bgColor:
      "bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800",
    label: "PROSPECTUS",
  },
};

export function ClientColumnStatus({ status }: { status: ClientStatus }) {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <Badge
      variant="outline"
      className={`text-muted-foreground px-1.5 ${config.color} ${config.bgColor}`}
    >
      <Icon className="size-3.5" />
      <span className="capitalize">{config.label}</span>
    </Badge>
  );
}
