"use client";
import React, { useState } from "react";
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
import { useTransaction } from "@/context/TransactionContext";
import { useRouter } from "next/navigation";
import TopUpConfirmation from "./TopUpConfirmation";

const formSchema = z.object({
  nominal: z.number().min(1, "*required"),
  desc: z.string().min(1, "*required"),
});

const TopUpForm = () => {
  const [type, setType] = useState("+");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedNominal, setSelectedNominal] = useState(0);
  const { addTransaction } = useTransaction();
  const { balance } = useTransaction();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nominal: 0,
      desc: "",
    },
  });

  const handleNominalClick = (nominal: number) => {
    form.setValue("nominal", nominal);
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    const nominal = values.nominal;

    if (!nominal || nominal <= 0) {
      alert("Masukkan nominal terlebih dahulu!");
      return;
    }
    setSelectedNominal(nominal);
    setShowConfirmation(true);
  }

  const handleConfirmTopUp = (values: z.infer<typeof formSchema>) => {
    form.handleSubmit(onSubmit)();
    const date = new Date();
    if (type === "-" && selectedNominal > balance) {
      alert("Saldo tidak mencukupi!");
      return;
    }
    addTransaction({
      id: Date.now(),
      type: type,
      amount: values.nominal,
      desc: values.desc,
      date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
      time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
      color: "text-green-600",
    });
    console.log(
      `Top Up sebesar: Rp. ${selectedNominal.toLocaleString("id-ID")}`
    );
    setShowConfirmation(true);
    router.push("/transaction-page");
  };

  const handleCloseModal = () => {
    setShowConfirmation(false);
  };

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
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Jenis Transaksi</label>
                <select
                  className="p-2 border rounded-md"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="+">Top Up</option>
                  <option value="-">Bayar</option>
                </select>
              </div>
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
              <FormField
                control={form.control}
                name="desc"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Masukkan catatan top up"
                        {...field}
                        className={cn("w-full")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-red-600">
                {type === "+" ? "Top Up" : "Bayar"}
              </Button>
            </form>
          </Form>
        </div>
        <div className=" flex flex-wrap justify-around gap-1 ">
          {[10000, 20000, 50000, 100000, 250000, 500000].map((nominal) => (
            <TopUpNominal
              key={nominal}
              nominal={nominal}
              onClick={handleNominalClick}
            />
          ))}
        </div>
      </div>
      {showConfirmation && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/50">
          <TopUpConfirmation
            type={type}
            nominal={form.watch("nominal")}
            onConfirm={() => handleConfirmTopUp(form.getValues())}
            onClose={handleCloseModal}
          />
        </div>
      )}
    </div>
  );
};

export default TopUpForm;
