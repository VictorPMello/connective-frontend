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

export default function TermsOfServiceDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="cursor-pointer text-xs p-1">
          Terms of Service
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[85vh] bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Termos de Serviço
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-600">
            Última Atualização: 13 de Outubro de 2025
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-sm text-gray-700">
            <p className="font-medium text-base">
              Bem-vindo ao Connective! Estes Termos de Serviço
              (&quot;Termos&quot;) regem seu acesso e uso da plataforma de
              gerenciamento de relacionamento com o cliente da Connective e
              serviços relacionados (coletivamente, o &quot;Serviço&quot;). Ao
              acessar ou usar o Serviço, você concorda em estar vinculado a
              estes Termos.
            </p>

            <section>
              <h3 className="font-semibold text-base text-gray-900 mb-2">
                1. Aceitação dos Termos
              </h3>
              <p>
                Ao criar uma conta, acessar ou usar o Connective, você concorda
                com estes Termos e nossa Política de Privacidade. Se você não
                concordar, não poderá usar o Serviço. Se você estiver usando o
                Serviço em nome de uma organização, você declara que tem
                autoridade para vincular essa organização a estes Termos.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base text-gray-900 mb-2">
                2. Descrição do Serviço
              </h3>
              <p className="mb-2">
                Connective é uma plataforma CRM baseada em nuvem que permite às
                empresas gerenciar relacionamentos com clientes, acompanhar
                pipelines de vendas, automatizar campanhas de marketing e
                analisar o desempenho dos negócios. O Serviço inclui:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Gerenciamento de contatos e leads</li>
                <li>Acompanhamento de pipeline de vendas</li>
                <li>Automação de marketing por e-mail</li>
                <li>Análises e relatórios</li>
                <li>Integração com serviços de terceiros</li>
                <li>Aplicativos móveis e desktop</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-base text-gray-900 mb-2">
                3. Registro e Segurança da Conta
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    3.1 Criação da Conta
                  </h4>
                  <p>
                    Você deve fornecer informações precisas, completas e
                    atualizadas durante o registro. Você é responsável por
                    manter a confidencialidade de suas credenciais de conta e
                    por todas as atividades sob sua conta.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    3.2 Responsabilidade da Conta
                  </h4>
                  <p className="mb-2">Você concorda em:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      Nos notificar imediatamente sobre qualquer acesso não
                      autorizado
                    </li>
                    <li>
                      Usar senhas fortes e habilitar autenticação de dois
                      fatores quando disponível
                    </li>
                    <li>
                      Não compartilhar suas credenciais de conta com outras
                      pessoas
                    </li>
                    <li>
                      Ser responsável por todas as atividades que ocorrem em sua
                      conta
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    3.3 Encerramento da Conta
                  </h4>
                  <p>
                    Reservamos o direito de suspender ou encerrar contas que
                    violem estes Termos ou se envolvam em atividades
                    fraudulentas, abusivas ou ilegais.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="font-semibold text-base text-gray-900 mb-2">
                4. Planos de Assinatura e Pagamentos
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">4.1 Preços</h4>
                  <p>
                    A Connective oferece vários planos de assinatura com
                    diferentes recursos e níveis de preços. Os preços atuais
                    estão disponíveis em nosso site e podem ser alterados com
                    aviso prévio de 30 dias.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    4.2 Faturamento
                  </h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      As assinaturas são faturadas antecipadamente mensalmente
                      ou anualmente
                    </li>
                    <li>
                      O pagamento é devido no início de cada ciclo de
                      faturamento
                    </li>
                    <li>
                      Você nos autoriza a cobrar seu método de pagamento
                      automaticamente
                    </li>
                    <li>
                      Falhas no pagamento podem resultar em suspensão do serviço
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    4.3 Impostos
                  </h4>
                  <p>
                    Os preços não incluem impostos aplicáveis. Você é
                    responsável por todos os impostos associados ao uso do
                    Serviço.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    4.4 Alterações de Preço
                  </h4>
                  <p>
                    Podemos alterar nossos preços com aviso prévio de 30 dias. O
                    uso continuado após a mudança de preço constitui aceitação
                    do novo preço.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="font-semibold text-base text-gray-900 mb-2">
                5. Cancelamento e Reembolsos
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    5.1 Cancelamento
                  </h4>
                  <p>
                    Você pode cancelar sua assinatura a qualquer momento através
                    das configurações da sua conta. Os cancelamentos entram em
                    vigor no final do período de faturamento atual.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    5.2 Política de Reembolso
                  </h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      Novos assinantes podem solicitar reembolso total dentro de
                      7 dias da compra inicial
                    </li>
                    <li>
                      Reembolsos após o período de 7 dias não são fornecidos
                    </li>
                    <li>
                      Assinaturas anuais não são elegíveis para reembolsos
                      parciais
                    </li>
                    <li>
                      Reembolsos são processados para o método de pagamento
                      original em até 10 dias úteis
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    5.3 Sem Reembolso por Violações
                  </h4>
                  <p>
                    Nenhum reembolso será emitido se sua conta for encerrada por
                    violar estes Termos.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="font-semibold text-base text-gray-900 mb-2">
                6. Política de Uso Aceitável
              </h3>
              <p className="mb-2">Você concorda em NÃO:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Violar quaisquer leis ou regulamentos aplicáveis</li>
                <li>
                  Infringir direitos de propriedade intelectual de terceiros
                </li>
                <li>Fazer upload de vírus, malware ou código malicioso</li>
                <li>Tentar obter acesso não autorizado aos nossos sistemas</li>
                <li>
                  Usar o Serviço para spam ou comunicações não solicitadas
                </li>
                <li>
                  Raspar, coletar ou extrair dados de usuários sem permissão
                </li>
                <li>Revender, alugar ou redistribuir o Serviço</li>
                <li>Fazer engenharia reversa ou descompilar o Serviço</li>
                <li>
                  Usar o Serviço para assediar, abusar ou prejudicar outras
                  pessoas
                </li>
                <li>Criar contas falsas ou se passar por outras pessoas</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-base text-gray-900 mb-2">
                7. Seus Dados e Conteúdo
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    7.1 Seus Direitos
                  </h4>
                  <p>
                    Você retém todos os direitos sobre os dados e conteúdo que
                    você carrega no Connective (&quot;Seus Dados&quot;). Você
                    nos concede uma licença limitada para hospedar, armazenar e
                    processar Seus Dados exclusivamente para fornecer o Serviço.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    7.2 Suas Responsabilidades
                  </h4>
                  <p className="mb-2">Você é responsável por:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>A precisão e legalidade dos Seus Dados</li>
                    <li>
                      Obter os consentimentos necessários para processar dados
                      de clientes
                    </li>
                    <li>
                      Cumprir as leis de proteção de dados (LGPD, GDPR, etc.)
                    </li>
                    <li>
                      Fazer backup dos Seus Dados (fornecemos ferramentas de
                      backup, mas você é o responsável final)
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    7.3 Exportação de Dados
                  </h4>
                  <p>
                    Você pode exportar Seus Dados a qualquer momento através de
                    nossas ferramentas de exportação. Após o encerramento, Seus
                    Dados estarão disponíveis para exportação por 30 dias.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="font-semibold text-base text-gray-900 mb-2">
                8. Propriedade Intelectual
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    8.1 Direitos da Connective
                  </h4>
                  <p>
                    O Serviço, incluindo todo software, designs, textos,
                    gráficos e logotipos, é de propriedade da Connective
                    Software LTDA e protegido por leis de propriedade
                    intelectual. Você não pode copiar, modificar ou criar obras
                    derivadas sem nossa permissão por escrito.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    8.2 Feedback
                  </h4>
                  <p>
                    Se você fornecer sugestões ou feedback sobre o Serviço,
                    podemos usá-lo sem qualquer obrigação para com você.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="font-semibold text-base text-gray-900 mb-2">
                9. Serviços de Terceiros
              </h3>
              <p>
                A Connective pode integrar com serviços de terceiros. Seu uso de
                serviços de terceiros está sujeito aos seus próprios termos e
                condições. Não somos responsáveis por serviços de terceiros ou
                seu conteúdo.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base text-gray-900 mb-2">
                10. Disponibilidade do Serviço e Suporte
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    10.1 Tempo de Atividade
                  </h4>
                  <p>
                    Nos esforçamos para manter 99,9% de tempo de atividade, mas
                    não garantimos acesso ininterrupto. Podemos realizar
                    manutenção com aviso prévio quando possível.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    10.2 Suporte
                  </h4>
                  <p>
                    O suporte é fornecido por e-mail em suporte@connective.com.
                    Os tempos de resposta variam de acordo com o plano de
                    assinatura.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="font-semibold text-base text-gray-900 mb-2">
                11. Isenções de Responsabilidade e Limitações de
                Responsabilidade
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    11.1 Serviço &quot;Como Está&quot;
                  </h4>
                  <p className="uppercase text-xs">
                    O SERVIÇO É FORNECIDO &quot;COMO ESTÁ&quot; SEM GARANTIAS DE
                    QUALQUER TIPO, EXPRESSAS OU IMPLÍCITAS, INCLUINDO GARANTIAS
                    DE COMERCIALIZAÇÃO, ADEQUAÇÃO A UM PROPÓSITO ESPECÍFICO OU
                    NÃO VIOLAÇÃO.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    11.2 Limitação de Responsabilidade
                  </h4>
                  <p className="uppercase text-xs mb-2">
                    NA MÁXIMA EXTENSÃO PERMITIDA POR LEI, A CONNECTIVE NÃO SERÁ
                    RESPONSÁVEL POR:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-xs">
                    <li>
                      Danos indiretos, incidentais, especiais ou consequenciais
                    </li>
                    <li>
                      Perda de lucros, receita, dados ou oportunidades de
                      negócios
                    </li>
                    <li>
                      Danos que excedam o valor que você nos pagou nos 12 meses
                      anteriores à reclamação
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    11.3 Exceções
                  </h4>
                  <p>
                    Algumas jurisdições não permitem limitação de
                    responsabilidade por lesões pessoais ou deturpação
                    fraudulenta. Essas limitações podem não se aplicar a você.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="font-semibold text-base text-gray-900 mb-2">
                12. Indenização
              </h3>
              <p className="mb-2">
                Você concorda em indenizar e isentar a Connective de quaisquer
                reclamações, perdas ou danos decorrentes de:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Sua violação destes Termos</li>
                <li>Sua violação de quaisquer direitos de terceiros</li>
                <li>Seu uso do Serviço</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-base text-gray-900 mb-2">
                13. Modificações dos Termos
              </h3>
              <p>
                Podemos modificar estes Termos a qualquer momento. Notificaremos
                você sobre alterações materiais por e-mail ou através do
                Serviço. O uso continuado após as alterações constitui
                aceitação. Se você discordar, deve parar de usar o Serviço.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base text-gray-900 mb-2">
                14. Encerramento
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    14.1 Por Você
                  </h4>
                  <p>
                    Você pode encerrar sua conta a qualquer momento através das
                    configurações da conta.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    14.2 Por Nós
                  </h4>
                  <p className="mb-2">
                    Podemos encerrar ou suspender seu acesso imediatamente se
                    você:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Violar estes Termos</li>
                    <li>Deixar de pagar taxas</li>
                    <li>Se envolver em atividades fraudulentas ou ilegais</li>
                    <li>Mediante sua solicitação</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    14.3 Efeito do Encerramento
                  </h4>
                  <p className="mb-2">Após o encerramento:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Seu acesso ao Serviço termina imediatamente</li>
                    <li>
                      Você permanece responsável por quaisquer taxas pendentes
                    </li>
                    <li>
                      Seus Dados serão excluídos após 30 dias (a menos que seja
                      legalmente obrigado a reter)
                    </li>
                    <li>
                      Estes Termos sobrevivem ao encerramento quando aplicável
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="font-semibold text-base text-gray-900 mb-2">
                15. Lei Aplicável e Resolução de Disputas
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    15.1 Lei Aplicável
                  </h4>
                  <p>
                    Estes Termos são regidos pelas leis do Brasil,
                    especificamente pelo Código Civil Brasileiro e pela Lei
                    Geral de Proteção de Dados (LGPD - Lei Geral de Proteção de
                    Dados).
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    15.2 Jurisdição
                  </h4>
                  <p>
                    Quaisquer disputas serão resolvidas nos tribunais de Feira
                    de Santana, Bahia, Brasil.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    15.3 Resolução Informal
                  </h4>
                  <p>
                    Antes de registrar uma reclamação, você concorda em nos
                    contatar em suporte@connective.com para tentar uma resolução
                    informal.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="font-semibold text-base text-gray-900 mb-2">
                16. Disposições Gerais
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    16.1 Acordo Completo
                  </h4>
                  <p>
                    Estes Termos, juntamente com a Política de Privacidade,
                    constituem o acordo completo entre você e a Connective.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    16.2 Divisibilidade
                  </h4>
                  <p>
                    Se qualquer disposição for considerada inexequível, as
                    disposições restantes permanecem em vigor.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    16.3 Não Renúncia
                  </h4>
                  <p>
                    A falha em fazer cumprir qualquer disposição não renuncia ao
                    nosso direito de fazê-lo posteriormente.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    16.4 Cessão
                  </h4>
                  <p>
                    Você não pode ceder estes Termos sem nosso consentimento.
                    Podemos ceder estes Termos a qualquer sucessor ou afiliada.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    16.5 Força Maior
                  </h4>
                  <p>
                    Não somos responsáveis por atrasos ou falhas devido a
                    circunstâncias além de nosso controle razoável.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="font-semibold text-base text-gray-900 mb-2">
                17. Informações de Contato
              </h3>
              <p className="mb-2">
                Para perguntas sobre estes Termos, entre em contato conosco:
              </p>
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
              Ao usar o Connective, você reconhece que leu, entendeu e concorda
              com estes Termos de Serviço.
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
