"use client";

import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import { Card, CardHeader, CardBody } from '@heroui/react';
import React from 'react'
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const waitlistSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  farmName: z.string().optional(),
});

const WaitlistPage = () => {

     const {
       control,
       handleSubmit,
       formState: { errors, isSubmitting },
       reset,
     } = useForm({
       resolver: zodResolver(waitlistSchema),
       defaultValues: {
         name: "",
         email: "",
         farmName: "",
       },
     });

     const onSubmit = async (data: any) => {
       try {
         // Simulate submission
         await new Promise((resolve) => setTimeout(resolve, 1500));
         console.log(data);
         reset();
         alert("Successfully joined waitlist!");
       } catch (error) {
         alert("Submission failed");
       }
     };

  return (
    <div className="min-h-screen">
      <h1 className="text-2xl font-bold mb-2">
        Join our <span className="text-primary"> waitlist </span>
      </h1>
      <p className="text-gray-500 text-sm mb-6 lg:mb-10">
        Join our waitlist and be the first to transform your farm management
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="Full Name"
              variant="bordered"
              isInvalid={!!errors.name}
              errorMessage={errors.name?.message}
              fullWidth
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="email"
              label="Email"
              variant="bordered"
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message}
              fullWidth
            />
          )}
        />

        <Controller
          name="farmName"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="Farm Name (Optional)"
              variant="bordered"
              fullWidth
            />
          )}
        />

        <Button
          type="submit"
          color="primary"
          fullWidth
          isLoading={isSubmitting}>
          Join Waitlist
        </Button>
      </form>
    </div>
  );
}

export default WaitlistPage