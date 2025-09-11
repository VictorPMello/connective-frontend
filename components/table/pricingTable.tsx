import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  ChartColumnStacked,
  ChartSpline,
  Handshake,
  Link,
  X,
  Users,
  Zap,
  Check,
} from "lucide-react";

const featuress = [
  {
    features: "Customer Hub (clients & interactions in one place)",
    starter: <Check className="mx-auto" />,
    professional: <Check className="mx-auto" />,
    icon: <Users />,
  },
  {
    features: "Sales Pipeline (track deals & opportunities)",
    starter: <Check className="mx-auto" />,
    professional: <Check className="mx-auto" />,
    icon: <ChartColumnStacked />,
  },
  {
    features: "Task Automation (reminders & follow-ups)",
    starter: <X className="mx-auto" />,
    professional: <Check className="mx-auto" />,
    icon: <Zap />,
  },
  {
    features: "Integrations (WhatsApp, Email, etc.)",
    starter: <X className="mx-auto" />,
    professional: <Check className="mx-auto" />,
    icon: <Link />,
  },
  {
    features: "Reports & Analytics",
    starter: <X className="mx-auto" />,
    professional: <Check className="mx-auto" />,
    icon: <ChartSpline />,
  },
  {
    features: "Support",
    starter: "Basic",
    professional: "Priority",
    icon: <Handshake />,
  },
];

export function PricingTable() {
  return (
    <Table>
      <TableCaption className="text-lg">
        Choose the plan that best fits your business and start today.
      </TableCaption>
      <TableHeader>
        <TableRow className="text-xl">
          <TableHead className="w-[16rem]">Features</TableHead>
          <TableHead className="text-center">Starter</TableHead>
          <TableHead className="text-center">Professional</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {featuress.map((price) => (
          <TableRow key={price.features} className="text-xl">
            <TableCell className="font-medium flex gap-3 items-center">
              {price.icon} {price.features}
            </TableCell>
            <TableCell className="text-center">{price.starter}</TableCell>
            <TableCell className="text-center">{price.professional}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter></TableFooter>
    </Table>
  );
}
