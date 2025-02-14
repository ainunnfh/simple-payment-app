"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().min(1, "*required"),
  firstName: z.string().min(1, "*required"),
  lastName: z.string().min(1, "*required"),
  password: z.string().min(1, "*required"),
  confirmPassword: z.string().min(1, "*required"),
});

const RegistrationForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="flex flex-col gap-8 justify-center p-8 w-1/2">
        <div className="flex gap-2 items-center justify-center">
          <img className="w-5 h-5" src="assets/Logo.png" />
          <span className="font-bold">SIMS PPOB</span>
        </div>
        <div className="text-2xl font-bold text-center">
          Lengkapi data untuk
          <br />
          membuat akun
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="@ masukkan email anda" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="nama depan" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="nama belakang" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="buat password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="konfirmasi password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-red-600">
              Registrasi
            </Button>
          </form>
        </Form>

        <div className="flex gap-2 items-center justify-center">
          <span className="text-sm">Sudah punya akun?</span>
          <a href="/login-page" className="text-sm font-semibold text-red-600">
            Masuk
          </a>
        </div>
      </div>
      <div className="w-1/2">
        <img
          src="assets/illustrasi-login.png"
          alt=""
          className="w-full object-cover h-screen"
        />
      </div>
    </div>
  );
};

export default RegistrationForm;
