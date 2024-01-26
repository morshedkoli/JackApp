import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function StateCard({ title, desc, amount }) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent>
        <CardTitle>{amount}</CardTitle>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>See History</Button>
      </CardFooter>
    </Card>
  );
}
