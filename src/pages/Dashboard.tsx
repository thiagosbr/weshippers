import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Users, 
  Truck, 
  Package, 
  MapPin, 
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react"

const Dashboard = () => {
  const stats = [
    {
      title: "Total de Usuários",
      value: "1,234",
      change: "+12%",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Transportadoras Ativas",
      value: "89",
      change: "+5%",
      icon: Truck,
      color: "text-green-600"
    },
    {
      title: "Coletadores",
      value: "456",
      change: "+8%",
      icon: Users,
      color: "text-purple-600"
    },
    {
      title: "Remessas do Mês",
      value: "2,567",
      change: "+23%",
      icon: Package,
      color: "text-orange-600"
    }
  ]

  const recentActivity = [
    {
      id: 1,
      action: "Nova remessa criada",
      user: "João Silva",
      time: "há 5 min",
      status: "pending"
    },
    {
      id: 2,
      action: "Coleta realizada",
      user: "Maria Santos",
      time: "há 12 min",
      status: "completed"
    },
    {
      id: 3,
      action: "Transportadora cadastrada",
      user: "Express Logística",
      time: "há 1h",
      status: "completed"
    },
    {
      id: 4,
      action: "Rota otimizada",
      user: "Sistema",
      time: "há 2h",
      status: "completed"
    }
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Bem-vindo ao RouteHub</h1>
        <p className="text-lg opacity-90">
          Gerencie suas rotas, coletadores e remessas de forma eficiente
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">{stat.change}</span> em relação ao mês anterior
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
            <CardDescription>
              Acesse as funcionalidades mais utilizadas
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <Package className="w-4 h-4 mr-2" />
              Nova Remessa
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Users className="w-4 h-4 mr-2" />
              Cadastrar Coletador
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <MapPin className="w-4 h-4 mr-2" />
              Otimizar Rotas
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <TrendingUp className="w-4 h-4 mr-2" />
              Ver Relatórios
            </Button>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Atividade Recente</CardTitle>
            <CardDescription>
              Últimas ações realizadas no sistema
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    {activity.status === "completed" ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : activity.status === "pending" ? (
                      <Clock className="w-5 h-5 text-yellow-600" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-red-600" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">
                      {activity.action}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {activity.user}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Badge variant="secondary">{activity.time}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Visão Geral de Performance</CardTitle>
          <CardDescription>
            Métricas principais do sistema
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">95%</div>
              <p className="text-sm text-muted-foreground">Taxa de Entrega</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">2.3h</div>
              <p className="text-sm text-muted-foreground">Tempo Médio de Coleta</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">87%</div>
              <p className="text-sm text-muted-foreground">Eficiência de Rotas</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Dashboard