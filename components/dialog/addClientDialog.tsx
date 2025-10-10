import { useState } from "react";

import { IMaskInput } from "react-imask";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { IconPlus } from "@tabler/icons-react";
import { UseClient } from "@/hooks/use-client";
import { ClientCategory, ClientStatus } from "@/types/client/clientType";

export function AddClientDialog() {
  const [name, setName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("active");
  const [category, setCategory] = useState("basic");
  const [manager, setManager] = useState("");

  const { createClient } = UseClient();

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleCreateNewClient = () => {
    createClient({
      name,
      contactPerson,
      email,
      phone,
      status: status as ClientStatus,
      category: category as ClientCategory,
      manager,
    });

    // Add Error | Success message
    setName("");
    setContactPerson("");
    setEmail("");
    setPhone("");
    setStatus("active");
    setCategory("basic");
    setManager("");
  };

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm">
            <IconPlus />
            <span className=" cursor-pointer hidden lg:inline">
              Add New Client
            </span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create new client</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="clientName">Name</Label>
              <Input
                id="clientName"
                name="name"
                placeholder="Write a client name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="contactPerson">Contact Person</Label>
              <Input
                id="contactPerson"
                name="contactPerson"
                placeholder="Write a contact person name"
                required
                value={contactPerson}
                onChange={(e) => setContactPerson(e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="clientEmail">Email</Label>
              <Input
                id="clientEmail"
                name="Email"
                type="email"
                placeholder="example@company.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={
                  !isValidEmail(email) && email.length > 0
                    ? "bg-destructive"
                    : ""
                }
              />
              {!isValidEmail(email) && email.length > 0 && (
                <p className="text-xs text-red-500">Invalid email</p>
              )}
            </div>

            <div className="grid gap-3">
              <Label htmlFor="clientPhone">Phone</Label>
              <IMaskInput
                id="clientPhone"
                name="phone"
                mask="(00) 00000-0000"
                value={phone}
                onAccept={(value) => setPhone(value)}
                placeholder="(00) 00000-0000"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                type="tel"
                required
              />
            </div>

            <div className="flex gap-3">
              <div className="grid gap-3">
                <Select value={status} onValueChange={setStatus}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Status</SelectLabel>
                      <SelectItem className="cursor-pointer" value="active">
                        Active
                      </SelectItem>
                      <SelectItem
                        className="cursor-pointer"
                        value="negotiation"
                      >
                        Negotiation
                      </SelectItem>
                      <SelectItem className="cursor-pointer" value="inactive">
                        Inactive
                      </SelectItem>
                      <SelectItem className="cursor-pointer" value="prospectus">
                        Prospectus
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-3">
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Categories</SelectLabel>
                      <SelectItem className="cursor-pointer" value="basic">
                        Basic
                      </SelectItem>
                      <SelectItem className="cursor-pointer" value="premium">
                        Premium
                      </SelectItem>
                      <SelectItem className="cursor-pointer" value="enterprise">
                        Enterprise
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-3">
              <Label htmlFor="clientManager">Manager name</Label>
              <Input
                id="clientManager"
                name="clientManager"
                placeholder="Write a manager name"
                required
                value={manager}
                onChange={(e) => setManager(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="destructive" className="cursor-pointer">
                Cancel
              </Button>
            </DialogClose>

            <DialogClose asChild>
              <Button
                type="button"
                className="cursor-pointer"
                onClick={handleCreateNewClient}
              >
                Add Client
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
