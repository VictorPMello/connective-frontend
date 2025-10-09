import z from "zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { IMaskInput } from "react-imask";

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

import { format } from "date-fns";

import {
  Client,
  ClientCategory,
  ClientPaymentMethod,
  ClientStatus,
} from "@/types/client/clientType";

import { UpdateClientSchema } from "@/lib/schemas/clientSchema";

interface EditClientProps {
  client: Client;
  id: string;
}

type ClientFormData = z.infer<typeof UpdateClientSchema>;

export function EditClient({ client, id }: EditClientProps) {
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

      avatar: client.avatar,
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

      paymentMethod: client.paymentMethod as ClientPaymentMethod,

      notes: client.notes || "",
    },
  });

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const onSubmit: SubmitHandler<ClientFormData> = (data) => {
    console.log("submit");

    console.log(data, id);
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Payment Method</FieldLegend>
            <FieldDescription>Main client information</FieldDescription>
            <FieldGroup>
              {/* Name */}
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
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

              {/* Contact Person name */}
              <Field>
                <FieldLabel htmlFor="contactPerson">Contact Person</FieldLabel>
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

              {/* Email */}
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
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

              {/* Phone */}
              <Field>
                <FieldLabel htmlFor="phone">Phone</FieldLabel>
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

              {/* Manager */}
              <Field>
                <FieldLabel htmlFor="manager">Manager</FieldLabel>
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
                {/* Status */}
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
                  {form.formState.errors.status && (
                    <p className="text-sm text-destructive mt-1">
                      {form.formState.errors.status.message}
                    </p>
                  )}
                </Select>

                {/* Category */}
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
                        <SelectItem className="cursor-pointer" value="basic">
                          Basic
                        </SelectItem>
                        <SelectItem className="cursor-pointer" value="premium">
                          Premium
                        </SelectItem>
                        <SelectItem
                          className="cursor-pointer"
                          value="enterprise"
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
            <FieldLegend>Address</FieldLegend>
            <FieldDescription>Client location information</FieldDescription>
            <FieldGroup>
              {/* Street */}
              <Field>
                <FieldLabel htmlFor="address.street">Street</FieldLabel>
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

              {/* Number and Complement */}
              <Field className="flex gap-2">
                <div className="flex-1">
                  <FieldLabel htmlFor="address.number">Number</FieldLabel>
                  <Input
                    id="address.number"
                    placeholder="123"
                    {...form.register("address.number")}
                  />
                </div>
                <div className="flex-1">
                  <FieldLabel htmlFor="address.complement">
                    Complement
                  </FieldLabel>
                  <Input
                    id="address.complement"
                    placeholder="Apt 4B"
                    {...form.register("address.complement")}
                  />
                </div>
              </Field>

              {/* Neighborhood */}
              <Field>
                <FieldLabel htmlFor="address.neighborhood">
                  Neighborhood
                </FieldLabel>
                <Input
                  id="address.neighborhood"
                  placeholder="Neighborhood"
                  {...form.register("address.neighborhood")}
                />
              </Field>

              {/* City and State */}
              <Field className="flex gap-2">
                <div className="flex-[2]">
                  <FieldLabel htmlFor="address.city">City</FieldLabel>
                  <Input
                    id="address.city"
                    placeholder="City"
                    {...form.register("address.city")}
                  />
                </div>
                <div className="flex-1">
                  <FieldLabel htmlFor="address.state">State</FieldLabel>
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
              </Field>

              {/* ZIP Code */}
              <Field>
                <FieldLabel htmlFor="address.zipCode">ZIP Code</FieldLabel>
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

              {/* Country */}
              <Field>
                <FieldLabel htmlFor="address.country">Country</FieldLabel>
                <Input
                  id="address.country"
                  placeholder="Brazil"
                  {...form.register("address.country")}
                />
              </Field>
            </FieldGroup>
          </FieldSet>

          <FieldSeparator />
          <FieldSet>
            <FieldLegend>Additional Information</FieldLegend>
            <FieldDescription>
              Documents, dates and financial details
            </FieldDescription>
            <FieldGroup>
              {/* CNPJ */}
              <Field>
                <FieldLabel htmlFor="cnpj">CNPJ</FieldLabel>
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

              {/* CPF */}
              <Field>
                <FieldLabel htmlFor="cpf">CPF</FieldLabel>
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

              {/* Website */}
              <Field>
                <FieldLabel htmlFor="website">Website</FieldLabel>
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

              {/* LinkedIn */}
              <Field>
                <FieldLabel htmlFor="linkedin">LinkedIn</FieldLabel>
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

              {/* Secondary Email */}
              <Field>
                <FieldLabel htmlFor="secundaryEmail">
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

              {/* Secondary Phone */}
              <Field>
                <FieldLabel htmlFor="secundaryPhone">
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

              {/* Monthly Amount */}
              <Field>
                <FieldLabel htmlFor="monthlyAmount">Monthly Amount</FieldLabel>
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

              {/* Payment Method */}
              <Field>
                <FieldLabel htmlFor="paymentMethod">Payment Method</FieldLabel>
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
                        value="credit_card"
                      >
                        Credit Card
                      </SelectItem>
                      <SelectItem className="cursor-pointer" value="boleto">
                        Boleto
                      </SelectItem>
                      <SelectItem className="cursor-pointer" value="pix">
                        PIX
                      </SelectItem>
                      <SelectItem className="cursor-pointer" value="transfer">
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
            <FieldLegend>Business Details</FieldLegend>
            <FieldDescription>
              Financial information and contact details
            </FieldDescription>
            <FieldGroup>
              {/* Hiring Date */}
              <Field>
                <FieldLabel htmlFor="hiringDate">Hiring Date</FieldLabel>
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
                            format(new Date(field.value + "T12:00:00"), "PPP")
                          ) : (
                            <span>Select hiring date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={
                            field.value
                              ? new Date(field.value + "T12:00:00")
                              : undefined
                          }
                          onSelect={(date) => {
                            field.onChange(
                              date ? format(date, "yyyy-MM-dd") : "",
                            );
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

              {/* Next Due Date */}
              <Field>
                <FieldLabel htmlFor="nextDueDate">Next Due Date</FieldLabel>
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
                            format(new Date(field.value + "T12:00:00"), "PPP")
                          ) : (
                            <span>Select next due date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={
                            field.value
                              ? new Date(field.value + "T12:00:00")
                              : undefined
                          }
                          onSelect={(date) => {
                            field.onChange(
                              date ? format(date, "yyyy-MM-dd") : "",
                            );
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

              {/* Last Contact */}
              <Field>
                <FieldLabel htmlFor="lastContact">Last Contact Date</FieldLabel>
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
                            format(
                              new Date(field.value + "T12:00:00"),
                              "PPP",
                              {},
                            )
                          ) : (
                            <span>Select last contact date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={
                            field.value
                              ? new Date(field.value + "T12:00:00")
                              : undefined
                          }
                          onSelect={(date) => {
                            field.onChange(
                              date ? format(date, "yyyy-MM-dd") : "",
                            );
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
            {/* Notes */}
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="notes">Notes</FieldLabel>
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
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button type="submit">Submit</Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}
