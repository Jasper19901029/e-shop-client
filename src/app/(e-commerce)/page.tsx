import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <main className="">
      <h1>Welcome To 享家蔬果園</h1>
      <Skeleton className="h-[125px] w-[250px] rounded-xl mb-4" />
      <div className="space-y-2">
        <Skeleton className="">
          <Card>
            <CardHeader>
              <CardTitle className="h-[150px] w-[200px]"></CardTitle>
            </CardHeader>
            <CardContent>
              <p></p>
            </CardContent>
            <CardFooter className="w-full">
              <Button className="w-full bg-sky-700" variant={"ghost"}></Button>
            </CardFooter>
          </Card>
        </Skeleton>
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </main>
  );
}
