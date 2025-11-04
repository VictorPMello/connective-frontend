import z from "zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IMaskInput } from "react-imask";
import { format } from "date-fns";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { IconCalendar } from "@tabler/icons-react";

import {
  Client,
  ClientCategory,
  ClientPaymentMethod,
  ClientStatus,
} from "@/types/client/clientType";

import { UpdateClientSchema } from "@/lib/schemas/clientSchema";
import { UseClient } from "@/hooks/use-client";

interface EditClientProps {
  client: Client;
  id: string;
}

type ClientFormData = z.infer<typeof UpdateClientSchema>;

export function EditClient({ client, id }: EditClientProps) {
  const { updateClient } = UseClient();

  const form = useForm({
    resolver: zodResolver(UpdateClientSchema),
    defaultValues: {
      name: client.name,
      contactPerson: client.contactPerson,
      email: client.email,
      phone: client.phone,
      status: client.status as ClientStatus,
      category: client.category as ClientCategory,
      manager: client.manager,

      // avatar: client.avatar,
      address: {
        street: client.address?.street || "",
        number: client.address?.number || "",
        complement: client.address?.complement || "",
        neighborhood: client.address?.neighborhood || "",
        city: client.address?.city || "",
        state: client.address?.state || "",
        zipCode: client.address?.zipCode || "",
        country: client.address?.country || "",
      },

      cnpj: client.cnpj || "",
      cpf: client.cpf || "",

      website: client.website || "",
      linkedin: client.linkedin || "",

      secundaryEmail: client.secundaryEmail || "",
      secundaryPhone: client.secundaryPhone || "",

      monthlyAmount: client.monthlyAmount || "",

      hiringDate: client.hiringDate ? new Date(client.hiringDate) : undefined,
      nextDueDate: client.nextDueDate
        ? new Date(client.nextDueDate)
        : undefined,
      lastContact: client.lastContact
        ? new Date(client.lastContact)
        : undefined,

      paymentMethod: (client.paymentMethod as ClientPaymentMethod) || "PIX",

      notes: client.notes || "",
    },
  });

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const onSubmit: SubmitHandler<ClientFormData> = (data) =>
    updateClient(data, id);

  return (
    <div className="w-full max-w-md mt-3">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
          <FieldSet>
            <FieldLegend className="!text-xl font-bold">
              Main client information
            </FieldLegend>
            <FieldGroup>
              <Field>
                <FieldLabel className="text-base font-semibold" htmlFor="name">
                  Name
                </FieldLabel>
                <Input
                  id="name"
                  placeholder="CLient Name"
                  {...form.register("name")}
                  required
                />
                {form.formState.errors.name && (
                  <p className="text-sm text-destructive mt-1">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </Field>
              <Field>
                <FieldLabel
                  className="text-base font-semibold"
                  htmlFor="contactPerson"
                >
                  Contact Person
                </FieldLabel>
                <Input
                  id="contactPerson"
                  placeholder="Contact person name"
                  {...form.register("contactPerson")}
                  required
                />

                {form.formState.errors.contactPerson && (
                  <p className="text-sm text-destructive mt-1">
                    {form.formState.errors.contactPerson.message}
                  </p>
                )}
              </Field>
              <Field>
                <FieldLabel className="text-base font-semibold" htmlFor="phone">
                  Phone
                </FieldLabel>
                <Controller
                  name="phone"
                  control={form.control}
                  render={({ field: { onChange, value, onBlur, ref } }) => (
                    <IMaskInput
                      id="phone"
                      mask="(00) 00000-0000"
                      placeholder="(00) 00000-0000"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      value={value || ""}
                      onAccept={(value) => onChange(value)}
                      onBlur={onBlur}
                      ref={ref}
                    />
                  )}
                />
                {form.formState.errors.phone && (
                  <p className="text-sm text-destructive mt-1">
                    {form.formState.errors.phone.message}
                  </p>
                )}
              </Field>
              <Field>
                <FieldLabel className="text-base font-semibold" htmlFor="email">
                  Email
                </FieldLabel>
                <Input
                  id="email"
                  placeholder="Client email"
                  type="email"
                  {...form.register("email")}
                  required
                />
                {form.watch("email") &&
                  !isValidEmail(form.watch("email") as string) && (
                    <p className="text-xs text-red-500">Invalid email</p>
                  )}
                {form.formState.errors.email && (
                  <p className="text-sm text-destructive mt-1">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </Field>
              <Field>
                <FieldLabel
                  className="text-base font-semibold"
                  htmlFor="manager"
                >
                  Manager
                </FieldLabel>
                <Input
                  id="manager"
                  placeholder="Manager name"
                  {...form.register("manager")}
                  required
                />
                {form.formState.errors.manager && (
                  <p className="text-sm text-destructive mt-1">
                    {form.formState.errors.manager.message}
                  </p>
                )}
              </Field>
              <Field className="flex flex-row gap-2">
                <Select
                  value={form.watch("status")}
                  onValueChange={(value) =>
                    form.setValue("status", value as ClientStatus)
                  }
                >
                  <SelectTrigger id="status">
                    <SelectValue placeholder="Select a status" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Status</SelectLabel>
                      <SelectItem className="cursor-pointer" value="ACTIVE">
                        Active
                      </SelectItem>
                      <SelectItem
                        className="cursor-pointer"
                        value="NEGOTIATION"
                      >
                        Negotiation
                      </SelectItem>
                      <SelectItem className="cursor-pointer" value="INACTIVE">
                        Inactive
                      </SelectItem>
                      <SelectItem className="cursor-pointer" value="PROSPECTUS">
                        Prospectus
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                  {form.formState.errors.status && (
                    <p className="text-sm text-destructive mt-1">
                      {form.formState.errors.status.message}
                    </p>
                  )}
                </Select>
                <Select
                  value={form.watch("category")}
                  onValueChange={(value) =>
                    form.setValue("category", value as ClientCategory)
                  }
                >
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Categories</SelectLabel>
                        <SelectItem className="cursor-pointer" value="BASIC">
                          Basic
                        </SelectItem>
                        <SelectItem className="cursor-pointer" value="PREMIUM">
                          Premium
                        </SelectItem>
                        <SelectItem
                          className="cursor-pointer"
                          value="ENTERPRISE"
                        >
                          Enterprise
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </SelectContent>
                  {form.formState.errors.category && (
                    <p className="text-sm text-destructive mt-1">
                      {form.formState.errors.category.message}
                    </p>
                  )}
                </Select>
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSeparator />
          <FieldSet>
            <FieldLegend className="!text-xl font-bold">Address</FieldLegend>
            <FieldDescription className="text-lg font-bold">
              Client location information
            </FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel
                  className="text-base font-semibold"
                  htmlFor="address.country"
                >
                  Country
                </FieldLabel>
                <Input
                  id="address.country"
                  placeholder="Brazil"
                  {...form.register("address.country")}
                />
              </Field>
              <Field className="flex gap-2">
                <div className="flex-1  mb-5">
                  <FieldLabel
                    className="text-base font-semibold mb-3"
                    htmlFor="address.state"
                  >
                    State
                  </FieldLabel>
                  <Input
                    id="address.state"
                    placeholder="BA"
                    maxLength={2}
                    {...form.register("address.state")}
                  />
                  {form.formState.errors.address?.state && (
                    <p className="text-sm text-destructive mt-1">
                      {form.formState.errors.address.state.message}
                    </p>
                  )}
                </div>
                <div className="flex-[2]">
                  <FieldLabel
                    className="text-base font-semibold mb-3"
                    htmlFor="address.city"
                  >
                    City
                  </FieldLabel>
                  <Input
                    id="address.city"
                    placeholder="City"
                    {...form.register("address.city")}
                  />
                </div>
              </Field>
              <Field>
                <FieldLabel
                  className="text-base font-semibold"
                  htmlFor="address.street"
                >
                  Street
                </FieldLabel>
                <Input
                  id="address.street"
                  placeholder="Street name"
                  {...form.register("address.street")}
                />
                {form.formState.errors.address?.street && (
                  <p className="text-sm text-destructive mt-1">
                    {form.formState.errors.address.street.message}
                  </p>
                )}
              </Field>
              <Field className="flex gap-2">
                <div className="flex-1 mb-5">
                  <FieldLabel
                    className="text-base font-semibold mb-3"
                    htmlFor="address.number"
                  >
                    Number
                  </FieldLabel>
                  <Input
                    id="address.number"
                    placeholder="123"
                    {...form.register("address.number")}
                  />
                </div>
                <div className="flex-1">
                  <FieldLabel
                    className="text-base font-semibold mb-3"
                    htmlFor="address.complement"
                  >
                    Complement
                  </FieldLabel>
                  <Input
                    id="address.complement"
                    placeholder="Apt 4B"
                    {...form.register("address.complement")}
                  />
                </div>
              </Field>
              <Field>
                <FieldLabel
                  className="text-base font-semibold"
                  htmlFor="address.neighborhood"
                >
                  Neighborhood
                </FieldLabel>
                <Input
                  id="address.neighborhood"
                  placeholder="Neighborhood"
                  {...form.register("address.neighborhood")}
                />
              </Field>
              <Field>
                <FieldLabel
                  className="text-base font-semibold"
                  htmlFor="address.zipCode"
                >
                  ZIP Code
                </FieldLabel>
                <Controller
                  name="address.zipCode"
                  control={form.control}
                  render={({ field: { onChange, value, onBlur, ref } }) => (
                    <IMaskInput
                      id="address.zipCode"
                      mask="00000-000"
                      placeholder="00000-000"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      value={value || ""}
                      onAccept={(value) => onChange(value)}
                      onBlur={onBlur}
                      ref={ref}
                    />
                  )}
                />
                {form.formState.errors.address?.zipCode && (
                  <p className="text-sm text-destructive mt-1">
                    {form.formState.errors.address.zipCode.message}
                  </p>
                )}
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSeparator />
          <FieldSet>
            <FieldLegend className="!text-xl font-bold">
              Additional Information
            </FieldLegend>
            <FieldDescription className="text-xl font-bold">
              Documents, dates and financial details
            </FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel className="text-base font-semibold" htmlFor="cnpj">
                  CNPJ
                </FieldLabel>
                <Controller
                  name="cnpj"
                  control={form.control}
                  render={({ field: { onChange, value, onBlur, ref } }) => (
                    <IMaskInput
                      id="cnpj"
                      mask="00.000.000/0000-00"
                      placeholder="00.000.000/0000-00"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      value={value || ""}
                      onAccept={(value) => onChange(value)}
                      onBlur={onBlur}
                      ref={ref}
                    />
                  )}
                />
                {form.formState.errors.cnpj && (
                  <p className="text-sm text-destructive mt-1">
                    {form.formState.errors.cnpj.message}
                  </p>
                )}
              </Field>
              <Field>
                <FieldLabel className="text-base font-semibold" htmlFor="cpf">
                  CPF
                </FieldLabel>
                <Controller
                  name="cpf"
                  control={form.control}
                  render={({ field: { onChange, value, onBlur, ref } }) => (
                    <IMaskInput
                      id="cpf"
                      mask="000.000.000-00"
                      placeholder="000.000.000-00"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      value={value || ""}
                      onAccept={(value) => onChange(value)}
                      onBlur={onBlur}
                      ref={ref}
                    />
                  )}
                />
                {form.formState.errors.cpf && (
                  <p className="text-sm text-destructive mt-1">
                    {form.formState.errors.cpf.message}
                  </p>
                )}
              </Field>
              <Field>
                <FieldLabel
                  className="text-base font-semibold"
                  htmlFor="website"
                >
                  Website
                </FieldLabel>
                <Input
                  id="website"
                  placeholder="https://example.com"
                  type="url"
                  {...form.register("website")}
                />
                {form.formState.errors.website && (
                  <p className="text-sm text-destructive mt-1">
                    {form.formState.errors.website.message}
                  </p>
                )}
              </Field>
              <Field>
                <FieldLabel
                  className="text-base font-semibold"
                  htmlFor="linkedin"
                >
                  LinkedIn
                </FieldLabel>
                <Input
                  id="linkedin"
                  placeholder="https://linkedin.com/in/username"
                  type="url"
                  {...form.register("linkedin")}
                />
                {form.formState.errors.linkedin && (
                  <p className="text-sm text-destructive mt-1">
                    {form.formState.errors.linkedin.message}
                  </p>
                )}
              </Field>
              <Field>
                <FieldLabel
                  className="text-base font-semibold"
                  htmlFor="secundaryEmail"
                >
                  Secondary Email
                </FieldLabel>
                <Input
                  id="secundaryEmail"
                  placeholder="secondary@email.com"
                  type="email"
                  {...form.register("secundaryEmail")}
                />
                {form.formState.errors.secundaryEmail && (
                  <p className="text-sm text-destructive mt-1">
                    {form.formState.errors.secundaryEmail.message}
                  </p>
                )}
              </Field>
              <Field>
                <FieldLabel
                  className="text-base font-semibold"
                  htmlFor="secundaryPhone"
                >
                  Secondary Phone
                </FieldLabel>
                <Controller
                  name="secundaryPhone"
                  control={form.control}
                  render={({ field: { onChange, value, onBlur, ref } }) => (
                    <IMaskInput
                      id="secundaryPhone"
                      mask="(00) 00000-0000"
                      placeholder="(00) 00000-0000"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      value={value || ""}
                      onAccept={(value) => onChange(value)}
                      onBlur={onBlur}
                      ref={ref}
                    />
                  )}
                />
                {form.formState.errors.secundaryPhone && (
                  <p className="text-sm text-destructive mt-1">
                    {form.formState.errors.secundaryPhone.message}
                  </p>
                )}
              </Field>
              <Field>
                <FieldLabel
                  className="text-base font-semibold"
                  htmlFor="monthlyAmount"
                >
                  Monthly Amount
                </FieldLabel>
                <Controller
                  name="monthlyAmount"
                  control={form.control}
                  render={({ field: { onChange, value, onBlur, ref } }) => (
                    <IMaskInput
                      id="monthlyAmount"
                      mask="R$ num"
                      blocks={{
                        num: {
                          mask: Number,
                          scale: 2,
                          thousandsSeparator: ".",
                          radix: ",",
                          mapToRadix: ["."],
                          normalizeZeros: true,
                          padFractionalZeros: true,
                        },
                      }}
                      placeholder="R$ 0,00"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      value={value || ""}
                      onAccept={(value) => onChange(value)}
                      onBlur={onBlur}
                      ref={ref}
                    />
                  )}
                />
                {form.formState.errors.monthlyAmount && (
                  <p className="text-sm text-destructive mt-1">
                    {form.formState.errors.monthlyAmount.message}
                  </p>
                )}
              </Field>
              <Field>
                <FieldLabel
                  className="text-base font-semibold"
                  htmlFor="paymentMethod"
                >
                  Payment Method
                </FieldLabel>
                <Select
                  value={form.watch("paymentMethod")}
                  onValueChange={(value) =>
                    form.setValue("paymentMethod", value as ClientPaymentMethod)
                  }
                >
                  <SelectTrigger id="paymentMethod">
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Payment Methods</SelectLabel>
                      <SelectItem
                        className="cursor-pointer"
                        value="CREDIT_CARD"
                      >
                        Credit Card
                      </SelectItem>
                      <SelectItem className="cursor-pointer" value="BOLETO">
                        Boleto
                      </SelectItem>
                      <SelectItem className="cursor-pointer" value="PIX">
                        PIX
                      </SelectItem>
                      <SelectItem className="cursor-pointer" value="TRANSFER">
                        Transfer
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {form.formState.errors.paymentMethod && (
                  <p className="text-sm text-destructive mt-1">
                    {form.formState.errors.paymentMethod.message}
                  </p>
                )}
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSeparator />
          <FieldSet>
            <FieldLegend className="!text-xl font-bold">
              Business Details
            </FieldLegend>
            <FieldDescription className="text-xl font-bold">
              Financial information and contact details
            </FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel
                  className="text-base font-semibold"
                  htmlFor="hiringDate"
                >
                  Hiring Date
                </FieldLabel>
                <Controller
                  name="hiringDate"
                  control={form.control}
                  render={({ field }) => (
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={`w-full justify-start text-left font-normal ${
                            !field.value && "text-muted-foreground"
                          }`}
                        >
                          <IconCalendar className="mr-2 h-4 w-4" />
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Select hiring date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={(date) => {
                            field.onChange(date);
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  )}
                />
                {form.formState.errors.hiringDate && (
                  <p className="text-sm text-destructive mt-1">
                    {form.formState.errors.hiringDate.message}
                  </p>
                )}
              </Field>
              <Field>
                <FieldLabel
                  className="text-base font-semibold"
                  htmlFor="nextDueDate"
                >
                  Next Due Date
                </FieldLabel>
                <Controller
                  name="nextDueDate"
                  control={form.control}
                  render={({ field }) => (
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={`w-full justify-start text-left font-normal ${
                            !field.value && "text-muted-foreground"
                          }`}
                        >
                          <IconCalendar className="mr-2 h-4 w-4" />
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Select next due date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={(date) => {
                            field.onChange(date);
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  )}
                />
                {form.formState.errors.nextDueDate && (
                  <p className="text-sm text-destructive mt-1">
                    {form.formState.errors.nextDueDate.message}
                  </p>
                )}
              </Field>
              <Field>
                <FieldLabel
                  className="text-base font-semibold"
                  htmlFor="lastContact"
                >
                  Last Contact Date
                </FieldLabel>
                <Controller
                  name="lastContact"
                  control={form.control}
                  render={({ field }) => (
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={`w-full justify-start text-left font-normal ${
                            !field.value && "text-muted-foreground"
                          }`}
                        >
                          <IconCalendar className="mr-2 h-4 w-4" />
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Select last contact date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={(date) => {
                            field.onChange(date);
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  )}
                />
                {form.formState.errors.lastContact && (
                  <p className="text-sm text-destructive mt-1">
                    {form.formState.errors.lastContact.message}
                  </p>
                )}
              </Field>
            </FieldGroup>
          </FieldSet>

          <FieldSeparator />
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel className="text-base font-semibold" htmlFor="notes">
                  Notes
                </FieldLabel>
                <Textarea
                  id="notes"
                  placeholder="Additional notes about the client..."
                  rows={4}
                  {...form.register("notes")}
                />
                {form.formState.errors.notes && (
                  <p className="text-sm text-destructive mt-1">
                    {form.formState.errors.notes.message}
                  </p>
                )}
              </Field>
            </FieldGroup>
          </FieldSet>

          <FieldSeparator />
          <Field orientation="horizontal">
            <Button
              type="submit"
              className="w-full cursor-pointer text-base font-bold"
            >
              Submit
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}
