import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Search, Edit, Trash2, Eye, Package, MapPin, Clock, CheckCircle } from "lucide-react"

const Remessas = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const remessas = [
    {
      id: "RM001",
      cliente: "João Silva",
      origem: "São Paulo, SP",
      destino: "Rio de Janeiro, RJ",
      coletador: "Carlos Silva",
      transportadora: "Express Logística",
      status: "Em Trânsito",
      valor: "R$ 89,90",
      dataCriacao: "20/01/2024",
      previsaoEntrega: "22/01/2024"
    },
    {
      id: "RM002",
      cliente: "Maria Santos",
      origem: "Belo Horizonte, MG",
      destino: "Salvador, BA",
      coletador: "Ana Costa",
      transportadora: "Rápido Transportes",
      status: "Entregue",
      valor: "R$ 125,50",
      dataCriacao: "18/01/2024",
      previsaoEntrega: "20/01/2024"
    },
    {
      id: "RM003",
      cliente: "Pedro Costa",
      origem: "Brasília, DF",
      destino: "Fortaleza, CE",
      coletador: "Roberto Santos",
      transportadora: "Express Logística",
      status: "Pendente",
      valor: "R$ 156,80",
      dataCriacao: "21/01/2024",
      previsaoEntrega: "24/01/2024"
    },
    {
      id: "RM004",
      cliente: "Ana Oliveira",
      origem: "Porto Alegre, RS",
      destino: "Curitiba, PR",
      coletador: "Mariana Oliveira",
      transportadora: "Mega Delivery",
      status: "Coletado",
      valor: "R$ 67,30",
      dataCriacao: "19/01/2024",
      previsaoEntrega: "21/01/2024"
    }
  ]

  const filteredRemessas = remessas.filter(remessa =>
    remessa.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    remessa.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
    remessa.origem.toLowerCase().includes(searchTerm.toLowerCase()) ||
    remessa.destino.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Entregue":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">{status}</Badge>
      case "Em Trânsito":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">{status}</Badge>
      case "Coletado":
        return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">{status}</Badge>
      case "Pendente":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">{status}</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Remessas</h1>
          <p className="text-muted-foreground">
            Gerencie todas as remessas e entregas do sistema
          </p>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Plus className="w-4 h-4 mr-2" />
              Nova Remessa
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Criar Nova Remessa</DialogTitle>
              <DialogDescription>
                Preencha os dados da nova remessa para envio.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="cliente" className="text-right">
                  Cliente
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Selecione o cliente" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="joao">João Silva</SelectItem>
                    <SelectItem value="maria">Maria Santos</SelectItem>
                    <SelectItem value="pedro">Pedro Costa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="origem" className="text-right">
                  Origem
                </Label>
                <Input id="origem" placeholder="Cidade, Estado" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="destino" className="text-right">
                  Destino
                </Label>
                <Input id="destino" placeholder="Cidade, Estado" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="transportadora" className="text-right">
                  Transportadora
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Selecione a transportadora" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="express">Express Logística</SelectItem>
                    <SelectItem value="rapido">Rápido Transportes</SelectItem>
                    <SelectItem value="mega">Mega Delivery</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="valor" className="text-right">
                  Valor
                </Label>
                <Input id="valor" placeholder="R$ 0,00" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="observacoes" className="text-right">
                  Observações
                </Label>
                <Textarea id="observacoes" placeholder="Observações adicionais..." className="col-span-3" rows={3} />
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="outline">Cancelar</Button>
              <Button>Criar Remessa</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total de Remessas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold flex items-center gap-2">
              <Package className="w-6 h-6 text-primary" />
              2,567
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Em Trânsito
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Clock className="w-6 h-6" />
              156
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Entregues
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600 flex items-center gap-2">
              <CheckCircle className="w-6 h-6" />
              2,234
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Receita Total
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">R$ 89.450</div>
          </CardContent>
        </Card>
      </div>

      {/* Remessas Table */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Lista de Remessas</CardTitle>
              <CardDescription>
                Acompanhe todas as remessas e seu status de entrega
              </CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <Search className="w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Buscar remessas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Origem</TableHead>
                <TableHead>Destino</TableHead>
                <TableHead>Coletador</TableHead>
                <TableHead>Transportadora</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Previsão</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredRemessas.map((remessa) => (
                <TableRow key={remessa.id}>
                  <TableCell className="font-medium">{remessa.id}</TableCell>
                  <TableCell>{remessa.cliente}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-muted-foreground" />
                      {remessa.origem}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-muted-foreground" />
                      {remessa.destino}
                    </div>
                  </TableCell>
                  <TableCell>{remessa.coletador}</TableCell>
                  <TableCell>{remessa.transportadora}</TableCell>
                  <TableCell>{getStatusBadge(remessa.status)}</TableCell>
                  <TableCell className="font-medium">{remessa.valor}</TableCell>
                  <TableCell>{remessa.previsaoEntrega}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button size="sm" variant="ghost">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-destructive">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

export default Remessas