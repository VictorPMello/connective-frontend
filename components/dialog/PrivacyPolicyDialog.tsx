import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function PrivacyPolicyDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="cursor-pointer text-xs p-1">
          Privacy Policy
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-4xl max-h-[85vh] bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Política de Privacidade
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-600">
            Última Atualização: 13 de Outubro de 2025
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-sm text-gray-700">
            <p className="font-medium text-base">
              Esta Política de Privacidade descreve como a Connective coleta,
              usa, armazena e compartilha suas informações pessoais quando você
              utiliza nosso Serviço.
            </p>

            <section>
              <h3 className="font-semibold text-base text-gray-900 mb-2">
                1. Informações Coletadas
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Informações de cadastro (nome, e-mail, empresa, telefone)
                </li>
                <li>
                  Informações de uso do sistema (logins, interações,
                  preferências)
                </li>
                <li>Dados dos seus clientes inseridos por você</li>
                <li>Informações de pagamento (processadas por terceiros)</li>
                <li>
                  Endereço IP, tipo de dispositivo, navegador e dados técnicos
                </li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-base text-gray-900 mb-2">
                2. Uso das Informações
              </h3>
              <p>Utilizamos suas informações para:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Fornecer e operar o Serviço</li>
                <li>Personalizar a experiência do usuário</li>
                <li>Oferecer suporte ao cliente</li>
                <li>Melhorar nossos produtos e funcionalidades</li>
                <li>Enviar comunicações administrativas e promocionais</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-base text-gray-900 mb-2">
                3. Compartilhamento de Dados
              </h3>
              <p>Não vendemos seus dados. Compartilhamos apenas com:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Fornecedores de infraestrutura (ex: servidores em nuvem)
                </li>
                <li>Serviços de pagamento</li>
                <li>
                  Parceiros contratualmente obrigados a proteger seus dados
                </li>
                <li>Autoridades legais, quando exigido por lei</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-base text-gray-900 mb-2">
                4. Cookies e Tecnologias Semelhantes
              </h3>
              <p>
                Usamos cookies para autenticação, análise e personalização. Você
                pode controlar o uso de cookies nas configurações do seu
                navegador.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base text-gray-900 mb-2">
                5. Segurança
              </h3>
              <p>
                Implementamos medidas técnicas e organizacionais para proteger
                seus dados. No entanto, nenhum sistema é 100% seguro.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base text-gray-900 mb-2">
                6. Retenção de Dados
              </h3>
              <p>
                Reteremos seus dados enquanto sua conta estiver ativa ou
                conforme necessário para cumprir obrigações legais, resolver
                disputas e aplicar nossos contratos.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base text-gray-900 mb-2">
                7. Seus Direitos
              </h3>
              <p>
                Você pode solicitar acesso, correção, exclusão ou portabilidade
                dos seus dados. Também pode se opor ao processamento ou
                solicitar a limitação.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base text-gray-900 mb-2">
                8. Crianças e Menores
              </h3>
              <p>
                Nosso Serviço não é destinado a menores de 18 anos. Não
                coletamos intencionalmente dados de menores.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base text-gray-900 mb-2">
                9. Transferência Internacional de Dados
              </h3>
              <p>
                Podemos transferir seus dados para fora do Brasil, incluindo
                para países que podem não ter as mesmas leis de proteção de
                dados. Nesses casos, garantimos mecanismos adequados de
                proteção.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base text-gray-900 mb-2">
                10. Alterações nesta Política
              </h3>
              <p>
                Podemos atualizar esta Política periodicamente. Notificaremos
                sobre alterações materiais por e-mail ou pelo próprio Serviço.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base text-gray-900 mb-2">
                11. Contato
              </h3>
              <div className="pl-4 space-y-1">
                <p>Connective Software LTDA</p>
                <p>CNPJ: [A ser definido]</p>
                <p>
                  Endereço: Rua Adnil Falcão, 1585 - Feira de Santana, BA - CEP:
                  44088-744
                </p>
                <p>E-mail: suporte@connective.com</p>
              </div>
            </section>

            <p className="mt-6 text-sm font-medium text-gray-800">
              Ao utilizar o Connective, você reconhece que leu e concorda com
              esta Política de Privacidade.
            </p>
          </div>
        </ScrollArea>

        <DialogFooter className="flex gap-3">
          <DialogClose asChild>
            <Button variant="destructive">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
