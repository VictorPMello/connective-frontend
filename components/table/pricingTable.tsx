import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
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
  BriefcaseBusiness,
  Kanban,
} from "lucide-react";
import { Button } from "../ui/button";

const featuress = [
  {
    features: "Customer Hub (clients & interactions in one place)",
    starter: <Check className="mx-auto" />,
    professional: <Check className="mx-auto" />,
    enterprise: <Check className="mx-auto" />,
    icon: <Users />,
  },
  {
    features: "Sales Pipeline (track deals & opportunities)",
    starter: <Check className="mx-auto" />,
    professional: <Check className="mx-auto" />,
    enterprise: <Check className="mx-auto" />,
    icon: <ChartColumnStacked />,
  },
  {
    features: "Task Automation (reminders & follow-ups)",
    starter: <X className="mx-auto" />,
    professional: <Check className="mx-auto" />,
    enterprise: <Check className="mx-auto" />,
    icon: <Zap />,
  },
  {
    features: "Integrations (WhatsApp, Email, etc.)",
    starter: <X className="mx-auto" />,
    professional: <Check className="mx-auto" />,
    enterprise: <Check className="mx-auto" />,
    icon: <Link />,
  },
  {
    features: "Reports & Analytics",
    starter: <X className="mx-auto" />,
    professional: <Check className="mx-auto" />,
    enterprise: <Check className="mx-auto" />,
    icon: <ChartSpline />,
  },
  {
    features: "Support",
    starter: "Basic",
    professional: "Priority",
    enterprise: "Dedicated",
    icon: <Handshake />,
  },
  {
    starter: (
      <ul>
        <li>• Response within 48h</li>
        <li>• Email support</li>
        <li>• Knowledge base</li>
      </ul>
    ),
    professional: (
      <ul>
        <li>• Response within 4h</li>
        <li>• Email and chat support</li>
        <li>• Priority assistance</li>
      </ul>
    ),
    enterprise: (
      <ul>
        <li>• Dedicated account manager</li>
        <li>• Response within 1h</li>
        <li>• Email, chat and phone support</li>
      </ul>
    ),
  },
  {
    features: "Pricing - Month",
    starter: "R$ 49/mês",
    professional: "R$ 99/mês",
    enterprise: "R$ 149/mês",
    icon: <BriefcaseBusiness />,
  },
  {
    features: "Pricing - Year",
    starter: "R$ 470/ano (economize R$ 117,60)",
    professional: "R$ 950/ano (economize R$ 237,60)",
    enterprise: "R$ 1.430/ano (economize R$ 357,60)",
    icon: <BriefcaseBusiness />,
  },

  {
    features: "Suggested Limits by Plan",
    starter: (
      <ul>
        <li>• 5 Kanban Projects</li>
        <li>• Up to 250 registered customers</li>
        <li>• 1,000 emails per month</li>
      </ul>
    ),
    professional: (
      <ul>
        <li>• 25 Kanban Projects</li>
        <li>• Up to 2,500 registered customers</li>
        <li>• 10,000 emails per month</li>
      </ul>
    ),
    enterprise: (
      <ul>
        <li>• Unlimited Kanban Projects</li>
        <li>• Unlimited registered customers</li>
        <li>• Unlimited emails per month</li>
      </ul>
    ),
    icon: <Kanban />,
  },

  {
    starter: (
      <Button
        type="button"
        className="cursor-pointer text-lg bg-secondary hover:bg-secondary"
      >
        Try it for 14 days for free
      </Button>
    ),
    professional: (
      <Button
        type="button"
        className="cursor-pointer text-lg bg-primary hover:bg-primary"
      >
        Subscribe Now
      </Button>
    ),
    enterprise: (
      <Button
        type="button"
        className="cursor-pointer text-lg bg-primary hover:bg-primary"
      >
        Subscribe to Enterprise
      </Button>
    ),
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
          <TableHead className="text-center">Enterprise</TableHead>
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
            <TableCell className="text-center">{price.enterprise}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
