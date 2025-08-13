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
import { Plus, Search, Edit, Trash2, Eye, UserCheck, Star, Mail, Clock } from "lucide-react"

const Coletadores = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const coletadores = [
    {
      id: 1,
      nome: "Carlos Silva",
      email: "carlos@email.com",
      telefone: "(11) 99999-1111",
      transportadora: "Express Logística",
      avaliacao: 4.8,
      coletasRealizadas: 156,
      status: "Ativo",
      dataConvite: "12/01/2024"
    },
    {
      id: 2,
      nome: "Ana Costa",
      email: "ana@email.com",
      telefone: "(11) 88888-2222",
      transportadora: "Rápido Transportes",
      avaliacao: 4.9,
      coletasRealizadas: 203,
      status: "Ativo",
      dataConvite: "08/01/2024"
    },
    {
      id: 3,
      nome: "Roberto Santos",
      email: "roberto@email.com",
      telefone: "(11) 77777-3333",
      transportadora: "Express Logística",
      avaliacao: 4.6,
      coletasRealizadas: 89,
      status: "Pendente",
      dataConvite: "18/01/2024"
    },
    {
      id: 4,
      nome: "Mariana Oliveira",
      email: "mariana@email.com",
      telefone: "(11) 66666-4444",
      transportadora: "Mega Delivery",
      avaliacao: 4.7,
      coletasRealizadas: 134,
      status: "Inativo",
      dataConvite: "05/01/2024"
    }
  ]

  const filteredColetadores = coletadores.filter(coletador =>
    coletador.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    coletador.transportadora.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Coletadores</h1>
          <p className="text-muted-foreground">
            Gerencie a rede de coletadores das transportadoras
          </p>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-accent to-primary hover:opacity-90">
              <Mail className="w-4 h-4 mr-2" />
              Enviar Convite
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Enviar Convite para Coletador</DialogTitle>
              <DialogDescription>
                Convide um novo coletador para integrar uma transportadora.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
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
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input id="email" type="email" placeholder="email@exemplo.com" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="nome" className="text-right">
                  Nome
                </Label>
                <Input id="nome" placeholder="Nome do coletador" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="telefone" className="text-right">
                  Telefone
                </Label>
                <Input id="telefone" placeholder="(11) 99999-9999" className="col-span-3" />
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="outline">Cancelar</Button>
              <Button>Enviar Convite</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total de Coletadores
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold flex items-center gap-2">
              <UserCheck className="w-6 h-6 text-accent" />
              456
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Coletadores Ativos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">389</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Avaliação Média
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-500 fill-current" />
              4.7
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Convites Pendentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold flex items-center gap-2">
              <Clock className="w-6 h-6 text-secondary" />
              23
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Coletadores Table */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Lista de Coletadores</CardTitle>
              <CardDescription>
                Gerencie todos os coletadores e seus convites
              </CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <Search className="w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Buscar coletadores..."
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
                <TableHead>Email</TableHead>
                <TableHead>Telefone</TableHead>
                <TableHead>Transportadora</TableHead>
                <TableHead>Avaliação</TableHead>
                <TableHead>Coletas</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Data do Convite</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredColetadores.map((coletador) => (
                <TableRow key={coletador.id}>
                  <TableCell className="font-medium">{coletador.nome}</TableCell>
                  <TableCell>{coletador.email}</TableCell>
                  <TableCell>{coletador.telefone}</TableCell>
                  <TableCell>{coletador.transportadora}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-medium">{coletador.avaliacao}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">
                      {coletador.coletasRealizadas} coletas
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={
                      coletador.status === "Ativo" ? "default" : 
                      coletador.status === "Pendente" ? "secondary" : "destructive"
                    }>
                      {coletador.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{coletador.dataConvite}</TableCell>
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

export default Coletadores