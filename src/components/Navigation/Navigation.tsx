import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import * as React from "react"

const PRODUCTS = [
  {
    id: 0,
    name: "RightELD",
    description: "The best-in-class ELD of choice",
    icon: null,
  },
  {
    id: 1,
    name: "UniLytics",
    description: "A logistics analysis platform like no other",
    icon: null,
  },
]

const SERVICES = [
  {
    id: 0,
    name: "Service A",
    description: "Service A description",
    icon: null,
  },
  {
    id: 1,
    name: "Service B",
    description: "Service B description",
    icon: null,
  },
  {
    id: 2,
    name: "Service C",
    description: "Service C description",
    icon: null,
  },
]

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

const ProductServiceNavigation = () => {
  return (
    <div className="grid w-[400px] grid-cols-2 gap-3 p-4 md:w-[500px] lg:w-[600px]">
      <ul>
        {PRODUCTS.map((product) => (
          <ListItem key={product.id} title={product.name} href={""}>
            {product.description}
          </ListItem>
        ))}
      </ul>
      <ul>
        {SERVICES.map((service) => (
          <ListItem key={service.id} title={service.name} href={""}>
            {service.description}
          </ListItem>
        ))}
      </ul>
    </div>
  )
}

const Navigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className={navigationMenuTriggerStyle()}>
          <NavigationMenuLink>Company</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products & Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ProductServiceNavigation />
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Navigation
