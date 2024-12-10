import HomeHeroBackground from "@/components/HomeHeroBackground"
import HomeNavigation from "@/components/HomeNavigation"
import HomeSiteTitle from "@/components/HomeSiteTitle"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

const HomeHero = () => {
  return (
    <section className="relative min-h-screen pt-[38%] text-right md:px-32 md:pt-[20%] 2xl:px-96">
      <HomeHeroBackground />
      <HomeSiteTitle />
      <HomeNavigation />
      <div>
        <h2 className="text-shadow-sm mb-4 mt-7 pl-5 text-left font-mono text-2xl font-black text-primary-foreground">
          Hello, world!
        </h2>
        <section className="grid justify-items-center gap-12 px-3 lg:grid-cols-2 2xl:grid-cols-3">
          <div className="min-w-full">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Hey! 👋</CardTitle>
                <CardDescription>Lorem ipsum</CardDescription>
              </CardHeader>
              <CardContent>
                <Skeleton className="mb-5 h-[250px] w-full shadow-sm" />
                <div className="flex flex-col gap-2">
                  <Skeleton className="h-[9px] w-[72%] shadow-sm" />
                  <Skeleton className="h-[9px] w-[35%] shadow-sm" />
                  <Skeleton className="h-[9px] w-[82%] shadow-sm" />
                  <Skeleton className="h-[9px] w-[79%] shadow-sm" />
                  <Skeleton className="h-[9px] w-[62%] shadow-sm" />
                  <Skeleton className="h-[9px] w-[78%] shadow-sm" />
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="min-w-full">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Hello! 😮</CardTitle>
                <CardDescription>Lorem ipsum</CardDescription>
              </CardHeader>
              <CardContent>
                <Skeleton className="mb-5 h-[250px] w-full shadow-sm" />
                <div className="flex flex-col gap-2">
                  <Skeleton className="h-[9px] w-[72%] shadow-sm" />
                  <Skeleton className="h-[9px] w-[35%] shadow-sm" />
                  <Skeleton className="h-[9px] w-[82%] shadow-sm" />
                  <Skeleton className="h-[9px] w-[79%] shadow-sm" />
                  <Skeleton className="h-[9px] w-[62%] shadow-sm" />
                  <Skeleton className="h-[9px] w-[78%] shadow-sm" />
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="min-w-full">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Hi! 🙏</CardTitle>
                <CardDescription>Lorem ipsum</CardDescription>
              </CardHeader>
              <CardContent>
                <Skeleton className="mb-5 h-[250px] w-full shadow-sm" />
                <div className="flex flex-col gap-2">
                  <Skeleton className="h-[9px] w-[72%] shadow-sm" />
                  <Skeleton className="h-[9px] w-[35%] shadow-sm" />
                  <Skeleton className="h-[9px] w-[82%] shadow-sm" />
                  <Skeleton className="h-[9px] w-[79%] shadow-sm" />
                  <Skeleton className="h-[9px] w-[62%] shadow-sm" />
                  <Skeleton className="h-[9px] w-[78%] shadow-sm" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </section>
  )
}

export default HomeHero
