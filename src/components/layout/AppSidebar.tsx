import { 
  Users, 
  Truck, 
  Package, 
  MapPin, 
  BarChart3, 
  Settings,
  Home,
  UserCheck
} from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

const navigationItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Usuários", url: "/usuarios", icon: Users },
  { title: "Transportadoras", url: "/transportadoras", icon: Truck },
  { title: "Coletadores", url: "/coletadores", icon: UserCheck },
  { title: "Remessas", url: "/remessas", icon: Package },
  { title: "Rotas", url: "/rotas", icon: MapPin },
  { title: "Relatórios", url: "/relatorios", icon: BarChart3 },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname

  const isActive = (path: string) => currentPath === path

  return (
    <Sidebar className="border-r border-border">
      <SidebarContent>
        {/* Logo Section */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Truck className="w-5 h-5 text-primary-foreground" />
            </div>
            {state !== "collapsed" && (
              <div>
                <h2 className="text-lg font-bold text-foreground">RouteHub</h2>
                <p className="text-xs text-muted-foreground">Sistema de Rotas</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Navegação Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className={isActive(item.url) 
                      ? "bg-primary text-primary-foreground font-medium hover:bg-primary/90" 
                      : "hover:bg-muted text-muted-foreground hover:text-foreground"
                    }
                  >
                    <NavLink to={item.url} end>
                      <item.icon className="w-4 h-4" />
                      {state !== "collapsed" && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Settings */}
        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  className="hover:bg-muted text-muted-foreground hover:text-foreground"
                >
                  <NavLink to="/configuracoes">
                    <Settings className="w-4 h-4" />
                    {state !== "collapsed" && <span>Configurações</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}