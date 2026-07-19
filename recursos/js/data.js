const categoriasDefinidas = [
    "Organização", "Saúde Mental", "Autoconhecimento", "Rotina", 
    "Hábitos", "Estudos", "Financeiro", "Carreira", "Empresas", "Ferramentas Terapêuticas"
];

const recursosLista = [
    { nome: "Planejamento Diário", cat: "Organização", icon: "fa-calendar-day" },
    { nome: "Planejamento Semanal", cat: "Organização", icon: "fa-calendar-week" },
    { nome: "Planejamento Mensal", cat: "Organização", icon: "fa-calendar-alt" },
    { nome: "Planejamento Anual", cat: "Organização", icon: "fa-calendar" },
    { nome: "Checklist Diário", cat: "Organização", icon: "fa-check-square" },
    { nome: "Checklist Semanal", cat: "Organização", icon: "fa-tasks" },
    { nome: "Checklist Mensal", cat: "Organização", icon: "fa-list-ul" },
    { nome: "Organizador de Rotina", cat: "Rotina", icon: "fa-clock" },
    { nome: "Lista de Tarefas", cat: "Organização", icon: "fa-clipboard-list" },
    { nome: "Planejamento SMART", cat: "Organização", icon: "fa-bullseye" },
    { nome: "Matriz de Eisenhower", cat: "Organização", icon: "fa-th-large" },
    { nome: "Mapa de Prioridades", cat: "Organização", icon: "fa-sort-numeric-down" },
    { nome: "Quadro Kanban", cat: "Organização", icon: "fa-columns" },
    { nome: "Calendário", cat: "Organização", icon: "fa-calendar-day" },
    { nome: "Agenda", cat: "Organização", icon: "fa-book" },
    { nome: "Agenda Terapêutica", cat: "Saúde Mental", icon: "fa-heartbeat" },
    { nome: "Bloco de Notas", cat: "Saúde Mental", icon: "fa-sticky-note" },
    { nome: "Notas Rápidas", cat: "Saúde Mental", icon: "fa-bolt" },
    { nome: "Planejamento Familiar", cat: "Organização", icon: "fa-home" },
    { nome: "Organização Doméstica", cat: "Organização", icon: "fa-broom" },
    { nome: "Planejamento de Viagens", cat: "Organização", icon: "fa-plane" },
    { nome: "Diário Emocional", cat: "Ferramentas Terapêuticas", icon: "fa-book-open" },
    { nome: "Registro de Humor", cat: "Saúde Mental", icon: "fa-smile" },
    { nome: "Escala de Humor", cat: "Saúde Mental", icon: "fa-sliders-h" },
    { nome: "Escala de Energia", cat: "Saúde Mental", icon: "fa-battery-half" },
    { nome: "Registro de Gratidão", cat: "Saúde Mental", icon: "fa-praying-hands" },
    { nome: "Registro de Conquistas", cat: "Saúde Mental", icon: "fa-trophy" },
    { nome: "Autoconhecimento", cat: "Autoconhecimento", icon: "fa-brain" },
    { nome: "Construindo Sentido", cat: "Autoconhecimento", icon: "fa-compass" },
    { nome: "Projeto de Vida", cat: "Autoconhecimento", icon: "fa-map-signs" },
    { nome: "Valores Pessoais", cat: "Autoconhecimento", icon: "fa-gem" },
    { nome: "Carta para Mim Mesmo", cat: "Autoconhecimento", icon: "fa-envelope-open-text" },
    { nome: "Carta para o Futuro", cat: "Autoconhecimento", icon: "fa-paper-plane" },
    { nome: "Registro de Pensamentos", cat: "Ferramentas Terapêuticas", icon: "fa-cloud" },
    { nome: "Organizando Pensamentos", cat: "Ferramentas Terapêuticas", icon: "fa-sitemap" },
    { nome: "Identificando Emoções", cat: "Ferramentas Terapêuticas", icon: "fa-search-heart" },
    { nome: "Mapa da Vida", cat: "Autoconhecimento", icon: "fa-map" },
    { nome: "Mapa de Relacionamentos", cat: "Autoconhecimento", icon: "fa-project-diagram" },
    { nome: "Rede de Apoio", cat: "Autoconhecimento", icon: "fa-hands-helping" },
    { nome: "Reflexões da Semana", cat: "Saúde Mental", icon: "fa-lightbulb" },
    { nome: "Reflexão do Dia", cat: "Saúde Mental", icon: "fa-sun" },
    { nome: "Controle de Hábitos", cat: "Hábitos", icon: "fa-sync-alt" },
    { nome: "Controle de Água", cat: "Hábitos", icon: "fa-tint" },
    { nome: "Controle de Sono", cat: "Hábitos", icon: "fa-bed" },
    { nome: "Controle de Exercícios", cat: "Hábitos", icon: "fa-running" },
    { nome: "Planejamento Alimentar", cat: "Hábitos", icon: "fa-apple-alt" },
    { nome: "Controle de Medicamentos", cat: "Hábitos", icon: "fa-pills" },
    { nome: "Cronograma de Estudos", cat: "Estudos", icon: "fa-book-reader" },
    { nome: "Plano de Estudos", cat: "Estudos", icon: "fa-graduation-cap" },
    { nome: "Planejamento de Cursos", cat: "Estudos", icon: "fa-laptop-code" },
    { nome: "Controle de Leitura", cat: "Estudos", icon: "fa-glasses" },
    { nome: "Registro de Aprendizados", cat: "Estudos", icon: "fa-pen-nib" },
    { nome: "Planejamento Financeiro", cat: "Financeiro", icon: "fa-wallet" },
    { nome: "Controle de Gastos", cat: "Financeiro", icon: "fa-money-bill-wave" },
    { nome: "Controle Financeiro Familiar", cat: "Financeiro", icon: "fa-piggy-bank" },
    { nome: "Controle de Dívidas", cat: "Financeiro", icon: "fa-hand-holding-usd" },
    { nome: "Planejamento Patrimonial", cat: "Financeiro", icon: "fa-building" },
    { nome: "Planejamento Profissional", cat: "Carreira", icon: "fa-briefcase" },
    { nome: "Plano de Desenvolvimento", cat: "Carreira", icon: "fa-chart-line" },
    { nome: "Objetivos Profissionais", cat: "Carreira", icon: "fa-crosshairs" },
    { nome: "Competências", cat: "Carreira", icon: "fa-medal" },
    { nome: "Currículo", cat: "Carreira", icon: "fa-file-alt" },
    { nome: "Checklist Saúde Mental", cat: "Empresas", icon: "fa-clipboard-check" },
    { nome: "Checklist Clima Organizacional", cat: "Empresas", icon: "fa-users-cog" },
    { nome: "Checklist Liderança", cat: "Empresas", icon: "fa-user-tie" },
    { nome: "Checklist Comunicação", cat: "Empresas", icon: "fa-comments" },
    { nome: "Checklist Integração", cat: "Empresas", icon: "fa-handshake" },
    { nome: "Planejamento de Treinamentos", cat: "Empresas", icon: "fa-chalkboard-teacher" },
    { nome: "Plano de Desenvolvimento de Equipes", cat: "Empresas", icon: "fa-users" },
    { nome: "Avaliação de Bem-Estar", cat: "Empresas", icon: "fa-star" },
    { nome: "Plano de Ações", cat: "Empresas", icon: "fa-tasks" }
];

// Gerador Avançado de Seções Profissionais
function gerarSecoesPorTipo(nome, cat) {
    const n = nome.toLowerCase();

    if (n === "planejamento diário") {
        return [
            {
                titulo: "Diretrizes do Dia", icon: "fa-compass", desc: "Defina o norte do seu dia para manter o foco.",
                campos: [
                    { id: "data", label: "Data", type: "text", col: "2col" },
                    { id: "objetivo", label: "Objetivo Principal do Dia", type: "text", col: "2col" },
                    { id: "prioridades", label: "Top 3 Prioridades (Não negociáveis)", type: "textarea", rows: 3 }
                ]
            },
            {
                titulo: "Agenda e Compromissos", icon: "fa-clock", desc: "Organize seus blocos de tempo.",
                campos: [
                    { id: "manha", label: "Manhã", type: "textarea", rows: 3, col: "2col" },
                    { id: "tarde", label: "Tarde", type: "textarea", rows: 3, col: "2col" },
                    { id: "noite", label: "Noite", type: "textarea", rows: 3 }
                ]
            },
            {
                titulo: "Checklist e Tarefas", icon: "fa-tasks", desc: "O que precisa ser feito hoje?",
                campos: [{ id: "lista_tarefas", label: "Ações", type: "checklist", count: 8 }]
            },
            {
                titulo: "Bem-estar e Hábitos", icon: "fa-heartbeat", desc: "Cuide de si mesmo enquanto produz.",
                campos: [
                    { id: "energia", label: "Nível de Energia (1 a 10)", type: "text", col: "3col" },
                    { id: "agua", label: "Hidratação (Copos de água)", type: "text", col: "3col" },
                    { id: "humor", label: "Humor Dominante", type: "text", col: "3col" },
                    { id: "exercicio", label: "Atividade Física e Refeições", type: "textarea", rows: 2 }
                ]
            },
            {
                titulo: "Fechamento", icon: "fa-moon", desc: "Reflexão no final do dia.",
                campos: [
                    { id: "gratidao", label: "Motivos de Gratidão", type: "textarea", rows: 2 },
                    { id: "aprendizado", label: "Principais Aprendizados e Notas", type: "textarea", rows: 2 }
                ]
            }
        ];
    }

    if (n === "planejamento financeiro") {
        return [
            {
                titulo: "Resumo do Período", icon: "fa-calendar-alt", desc: "Visão geral da sua saúde financeira.",
                campos: [
                    { id: "mes", label: "Mês/Ano", type: "text", col: "2col" },
                    { id: "objetivo_fin", label: "Objetivo Financeiro Principal", type: "text", col: "2col" }
                ]
            },
            {
                titulo: "Entradas (Receitas)", icon: "fa-arrow-up", desc: "Todo dinheiro que entra.",
                campos: [
                    { id: "salario", label: "Renda Fixa / Salário", type: "text", col: "2col" },
                    { id: "renda_extra", label: "Renda Variável / Extra", type: "text", col: "2col" },
                    { id: "total_receitas", label: "Total Previsto", type: "text" }
                ]
            },
            {
                titulo: "Saídas (Despesas)", icon: "fa-arrow-down", desc: "Controle rígido para onde seu dinheiro vai.",
                campos: [
                    { id: "despesas_fixas", label: "Despesas Fixas (Moradia, Contas, etc)", type: "textarea", rows: 4, col: "2col" },
                    { id: "despesas_var", label: "Despesas Variáveis (Lazer, Alimentação, etc)", type: "textarea", rows: 4, col: "2col" },
                    { id: "dividas", label: "Dívidas e Parcelamentos Vigentes", type: "textarea", rows: 3 }
                ]
            },
            {
                titulo: "Crescimento e Segurança", icon: "fa-piggy-bank", desc: "Pensando no seu futuro.",
                campos: [
                    { id: "reserva", label: "Aporte para Reserva de Emergência", type: "text", col: "2col" },
                    { id: "investimentos", label: "Investimentos / Poupança", type: "text", col: "2col" }
                ]
            },
            {
                titulo: "Balanço", icon: "fa-scale-balanced", desc: "Fechamento mensal.",
                campos: [
                    { id: "saldo_final", label: "Saldo Final Estimado (Receitas - Despesas)", type: "text" },
                    { id: "reflexao_fin", label: "O que funcionou e o que melhorar no próximo mês?", type: "textarea", rows: 3 }
                ]
            }
        ];
    }

    if (n === "diário emocional" || n.includes("emoç") || n.includes("pensamento")) {
        return [
            {
                titulo: "O Contexto", icon: "fa-map-marker-alt", desc: "Descreva objetivamente o que aconteceu.",
                campos: [
                    { id: "data_hora", label: "Data e Hora", type: "text", col: "2col" },
                    { id: "gatilho", label: "Situação vivenciada (Onde, com quem, o que ocorreu?)", type: "textarea", rows: 3 }
                ]
            },
            {
                titulo: "Análise Interna", icon: "fa-brain", desc: "Explorando a mente e o corpo.",
                campos: [
                    { id: "pensamentos", label: "Pensamentos Automáticos (O que passou pela sua cabeça?)", type: "textarea", rows: 3 },
                    { id: "emocoes", label: "Emoções Percebidas e Intensidade (0 a 10)", type: "textarea", rows: 2, col: "2col" },
                    { id: "fisico", label: "Reações Físicas no Corpo", type: "textarea", rows: 2, col: "2col" }
                ]
            },
            {
                titulo: "Comportamento e Estratégia", icon: "fa-directions", desc: "Como você agiu em relação a isso.",
                campos: [
                    { id: "comportamento", label: "Como você reagiu? Qual foi seu comportamento?", type: "textarea", rows: 3 },
                    { id: "estrategias", label: "Estratégias de enfrentamento utilizadas", type: "textarea", rows: 2 }
                ]
            },
            {
                titulo: "Resolução", icon: "fa-lightbulb", desc: "Olhando de forma racional.",
                campos: [
                    { id: "aprendizado", label: "Reflexão e Aprendizado", type: "textarea", rows: 3 },
                    { id: "melhoria", label: "O que funcionou? O que faria diferente da próxima vez?", type: "textarea", rows: 3 }
                ]
            }
        ];
    }

    if (n === "agenda terapêutica") {
        return [
            {
                titulo: "Dados da Sessão", icon: "fa-calendar-check", desc: "Informações gerais do encontro.",
                campos: [
                    { id: "data", label: "Data da Sessão", type: "text", col: "2col" },
                    { id: "tema", label: "Tema ou Demanda Principal", type: "text", col: "2col" }
                ]
            },
            {
                titulo: "Desenvolvimento", icon: "fa-comments", desc: "Registro profundo da sessão.",
                campos: [
                    { id: "objetivos", label: "Objetivos trabalhados", type: "textarea", rows: 2 },
                    { id: "reflexoes", label: "Principais reflexões e insights da sessão", type: "textarea", rows: 4 },
                    { id: "exercicios", label: "Exercícios ou técnicas aplicadas", type: "textarea", rows: 2 }
                ]
            },
            {
                titulo: "Plano de Ação", icon: "fa-shoe-prints", desc: "Atividades para a semana.",
                campos: [
                    { id: "tarefas_terapia", label: "Compromissos e tarefas de casa", type: "checklist", count: 5 },
                    { id: "proxima_sessao", label: "Foco para a próxima sessão", type: "text" }
                ]
            }
        ];
    }

    // FALLBACK INTELIGENTE PARA OS OUTROS 61 RECURSOS
    // Eles receberão uma estrutura rica em 3 seções baseada em sua categoria
    let verb = "Planejar e Organizar";
    if(cat === "Hábitos" || cat === "Rotina") verb = "Monitorar e Controlar";
    if(cat === "Autoconhecimento" || cat === "Saúde Mental") verb = "Refletir e Aprofundar";

    return [
        {
            titulo: "Informações Gerais", icon: "fa-info-circle", desc: "Defina o propósito principal do uso desta ferramenta.",
            campos: [
                { id: "data", label: "Data / Período", type: "text", col: "2col" },
                { id: "foco", label: "Foco Principal", type: "text", col: "2col" }
            ]
        },
        {
            titulo: "Detalhamento da Estrutura", icon: "fa-layer-group", desc: `Espaço dedicado para ${verb.toLowerCase()} as informações detalhadas.`,
            campos: [
                { id: "detalhes1", label: "Elementos Chaves / Observações Críticas", type: "textarea", rows: 4, col: "2col" },
                { id: "detalhes2", label: "Variáveis / Fatores Adicionais", type: "textarea", rows: 4, col: "2col" },
                { id: "check_base", label: "Checklist de Verificação", type: "checklist", count: 6 }
            ]
        },
        {
            titulo: "Plano de Ação", icon: "fa-flag-checkered", desc: "O que deve ser feito a partir destas informações?",
            campos: [
                { id: "acao_imediata", label: "Ações Imediatas (Próximos passos)", type: "textarea", rows: 3 },
                { id: "notas_finais", label: "Considerações Finais", type: "textarea", rows: 2 }
            ]
        }
    ];
}

window.appRecursos = recursosLista.map(rec => {
    const id = rec.nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');
    return {
        id: id,
        titulo: rec.nome,
        categoria: rec.cat,
        icone: rec.icon,
        secoes: gerarSecoesPorTipo(rec.nome, rec.cat) // Agora gera seções complexas
    };
});