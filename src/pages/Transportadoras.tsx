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
import { Textarea } from "@/components/ui/textarea"
import { Plus, Search, Edit, Trash2, Eye, Truck, Users, MapPin } from "lucide-react"

const Transportadoras = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const transportadoras = [
    {
      id: 1,
      nome: "Express Logística",
      cnpj: "12.345.678/0001-90",
      email: "contato@express.com",
      telefone: "(11) 3333-4444",
      endereco: "São Paulo, SP",
      coletadores: 15,
      status: "Ativa",
      dataRegistro: "10/01/2024"
    },
    {
      id: 2,
      nome: "Rápido Transportes",
      cnpj: "98.765.432/0001-10",
      email: "info@rapido.com",
      telefone: "(11) 5555-6666",
      endereco: "Rio de Janeiro, RJ",
      coletadores: 23,
      status: "Ativa",
      dataRegistro: "15/01/2024"
    },
    {
      id: 3,
      nome: "Mega Delivery",
      cnpj: "11.222.333/0001-44",
      email: "contato@mega.com",
      telefone: "(11) 7777-8888",
      endereco: "Belo Horizonte, MG",
      coletadores: 8,
      status: "Pendente",
      dataRegistro: "20/01/2024"
    }
  ]

  const filteredTransportadoras = transportadoras.filter(transportadora =>
    transportadora.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transportadora.cnpj.includes(searchTerm)
  )

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Transportadoras</h1>
          <p className="text-muted-foreground">
            Gerencie as empresas de transporte cadastradas
          </p>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Plus className="w-4 h-4 mr-2" />
              Nova Transportadora
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Cadastrar Nova Transportadora</DialogTitle>
              <DialogDescription>
                Preencha os dados da nova transportadora abaixo.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="nome" className="text-right">
                  Nome
                </Label>
                <Input id="nome" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="cnpj" className="text-right">
                  CNPJ
                </Label>
                <Input id="cnpj" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input id="email" type="email" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="telefone" className="text-right">
                  Telefone
                </Label>
                <Input id="telefone" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="endereco" className="text-right">
                  Endereço
                </Label>
                <Textarea id="endereco" className="col-span-3" rows={3} />
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="outline">Cancelar</Button>
              <Button>Cadastrar</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total de Transportadoras
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold flex items-center gap-2">
              <Truck className="w-6 h-6 text-primary" />
              89
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Transportadoras Ativas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">76</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total de Coletadores
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold flex items-center gap-2">
              <Users className="w-6 h-6 text-accent" />
              456
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Cidades Atendidas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold flex items-center gap-2">
              <MapPin className="w-6 h-6 text-secondary" />
              127
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Transportadoras Table */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Lista de Transportadoras</CardTitle>
              <CardDescription>
                Gerencie todas as transportadoras cadastradas no sistema
              </CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <Search className="w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Buscar transportadoras..."
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
                <TableHead>Nome</TableHead>
                <TableHead>CNPJ</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Telefone</TableHead>
                <TableHead>Localização</TableHead>
                <TableHead>Coletadores</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Data de Registro</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTransportadoras.map((transportadora) => (
                <TableRow key={transportadora.id}>
                  <TableCell className="font-medium">{transportadora.nome}</TableCell>
                  <TableCell>{transportadora.cnpj}</TableCell>
                  <TableCell>{transportadora.email}</TableCell>
                  <TableCell>{transportadora.telefone}</TableCell>
                  <TableCell>{transportadora.endereco}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="flex items-center gap-1 w-fit">
                      <Users className="w-3 h-3" />
                      {transportadora.coletadores}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={
                      transportadora.status === "Ativa" ? "default" : 
                      transportadora.status === "Pendente" ? "secondary" : "destructive"
                    }>
                      {transportadora.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{transportadora.dataRegistro}</TableCell>
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

export default Transportadoras