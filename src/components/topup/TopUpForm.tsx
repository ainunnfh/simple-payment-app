"use client";
import React from "react";
import TopUpNominal from "./TopUpNominal";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  nominal: z.number().min(1, "*required"),
});

const TopUpForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nominal: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="flex flex-col gap-3 justify-between p-6">
      <div className="flex flex-col">
        Silahkan masukan
        <span className="font-bold text-2xl">Nominal Top Up</span>
      </div>

      <div className="flex ">
        <div className="w-3/4 flex flex-col gap-3">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="nominal"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Masukkan nominal top up"
                        {...field}
                        className={cn("w-full")}
                        onChange={(e) =>
                          form.setValue("nominal", Number(e.target.value))
                        }
                        value={form.watch("nominal")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-red-600">
                Top Up
              </Button>
            </form>
          </Form>
        </div>
        <div className=" flex flex-wrap justify-around gap-1 ">
          <TopUpNominal nominal={10000} />
          <TopUpNominal nominal={20000} />
          <TopUpNominal nominal={50000} />
          <TopUpNominal nominal={100000} />
          <TopUpNominal nominal={250000} />
          <TopUpNominal nominal={500000} />
        </div>
      </div>
    </div>
  );
};

export default TopUpForm;
