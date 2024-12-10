import HomeNavigation from "@/components/HomeNavigation"
import HomeSiteTitle from "@/components/HomeSiteTitle"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"

const HomePage = () => {
  return (
    <>
      <section className="relative min-h-screen pt-[38%] text-right md:px-32 md:pt-[20%] 2xl:px-96">
        <div className="absolute left-0 top-0 -z-20 block h-[calc(100vh_-_(100vh_-_100%))] w-[calc(100vw_-_(100vw_-_100%))] bg-gradient-to-br from-sky-300 via-teal-300 to-emerald-200" />
        <div className="absolute left-0 top-0 -z-20 block h-[calc(100vh_-_(100vh_-_100%))] w-[calc(100vw_-_(100vw_-_100%))] bg-gradient-to-t from-amber-50 via-amber-50/30 to-transparent" />
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
      <section className="mt-12 md:px-8 2xl:px-16">
        <article className="md:px-32 2xl:px-96">
          <h2 className="ml-8 font-serif text-4xl">Hello, world!</h2>
          <Separator className="my-6" />
          <div className="space-y-12 text-balance p-8 font-sans">
            <div className="grid gap-8 lg:grid-cols-2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut
                purus in sapien volutpat eleifend. Nam ultricies nibh vel arcu
                interdum, sed rhoncus orci scelerisque. Sed vitae libero
                ultricies nulla placerat mollis. Donec ac aliquam justo, vitae
                porta massa. Nullam congue dapibus felis nec aliquam. Vivamus
                tincidunt sagittis tellus, eget efficitur elit volutpat ac.
              </p>
              <p>
                Proin egestas malesuada mi sit amet ullamcorper. Vestibulum a
                mollis sapien, ut tempus lectus. Fusce rhoncus ante tempus,
                congue neque eleifend, laoreet massa. Sed libero velit, placerat
                cursus ultrices vel, consectetur id arcu. Aliquam nec quam
                posuere, accumsan nunc quis, eleifend risus. Vivamus at rhoncus
                enim. Vestibulum consectetur ipsum a vulputate imperdiet. Cras
                placerat mi quam, eu commodo dui accumsan eget.
              </p>
            </div>
            <Card className="lg:mx-44">
              <CardHeader>
                <CardTitle>Lipsum</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Morbi sed sem aliquet quam tincidunt posuere eu quis felis.
                  Cras sollicitudin sem vel enim tempor congue. Nulla mollis,
                  dui nec gravida viverra, turpis nisl congue nulla, non
                  tincidunt purus ante a enim.
                </p>
              </CardContent>
            </Card>
            <div className="grid gap-8 lg:grid-cols-2">
              <p>
                Proin mattis imperdiet tortor, ac pellentesque enim aliquet ac.
                Donec nec tellus hendrerit, laoreet elit at, sodales nulla.
                Pellentesque eget quam ante.
              </p>
              <Skeleton className="h-[250px] w-full bg-primary/10 p-16" />
            </div>
            <Card className="lg:mx-44">
              <CardHeader>
                <CardTitle>Lipsum</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Praesent maximus, tortor viverra facilisis varius, tortor
                  sapien mollis nulla, vitae faucibus lectus augue non nibh.
                  Vestibulum eget nibh vel odio ultrices porta in at tellus.
                  Morbi mi turpis, aliquet vitae varius nec, cursus et augue.
                  Etiam et nunc purus.
                </p>
              </CardContent>
            </Card>
          </div>
        </article>
      </section>
    </>
  )
}

export default HomePage
