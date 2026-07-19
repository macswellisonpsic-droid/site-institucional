document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const currentYearEl = document.getElementById('current-year');
    if (currentYearEl) currentYearEl.textContent = new Date().getFullYear();

    const isIndex = document.getElementById('recursos-grid') !== null;
    const isTool = document.getElementById('tool-form') !== null;

    /* INDEX LOGIC (Permanece igual, renderização da lista) */
    if (isIndex) {
        const grid = document.getElementById('recursos-grid');
        const filterContainer = document.getElementById('category-filters');
        
        const categoriasDefinidas = ["Organização", "Saúde Mental", "Autoconhecimento", "Rotina", "Hábitos", "Estudos", "Financeiro", "Carreira", "Empresas", "Ferramentas Terapêuticas"];
        const btnsHTML = `<button class="filter-btn active" data-cat="Todos">Todos</button>` + 
            categoriasDefinidas.map(cat => `<button class="filter-btn" data-cat="${cat}">${cat}</button>`).join('');
        filterContainer.innerHTML = btnsHTML;

        const renderGrid = (categoriaFiltro = "Todos") => {
            grid.innerHTML = '';
            const filtrados = categoriaFiltro === "Todos" ? window.appRecursos : window.appRecursos.filter(r => r.categoria === categoriaFiltro);
            filtrados.forEach((rec, index) => {
                const delay = index % 3 === 0 ? '' : index % 3 === 1 ? 'delay-1' : 'delay-2';
                grid.innerHTML += `
                    <a href="recurso.html?id=${rec.id}" class="service-card js-reveal is-visible ${delay}">
                        <div class="service-card__icon"><i class="fas ${rec.icone}"></i></div>
                        <h3 class="service-card__title">${rec.titulo}</h3>
                        <p class="service-card__desc">${rec.categoria}</p>
                    </a>
                `;
            });
        };
        renderGrid();
        filterContainer.addEventListener('click', (e) => {
            if(e.target.classList.contains('filter-btn')) {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                renderGrid(e.target.getAttribute('data-cat'));
            }
        });
    }

    /* TOOL LOGIC (Totalmente reestruturado para UX e PDF Profissional) */
    if (isTool) {
        const urlParams = new URLSearchParams(window.location.search);
        const recursoId = urlParams.get('id');
        const recurso = window.appRecursos.find(r => r.id === recursoId);

        if (!recurso) {
            document.getElementById('tool-title').textContent = "Recurso não encontrado";
            return;
        }

        document.title = `${recurso.titulo} | Macs Wellison`;
        document.getElementById('tool-title').textContent = recurso.titulo;
        document.getElementById('tool-category').innerHTML = `<i class="fas ${recurso.icone}"></i> ${recurso.categoria}`;

        // Construir o Formulário Baseado em Seções (Cards)
        const form = document.getElementById('tool-form');
        let formHTML = '';

        recurso.secoes.forEach((secao, secIndex) => {
            formHTML += `
            <div class="tool-section">
                <div class="tool-section__header">
                    <h3 class="tool-section__title"><i class="fas ${secao.icon}"></i> ${secao.titulo}</h3>
                    <p class="tool-section__desc">${secao.desc}</p>
                </div>
                <div class="form-grid">`;
            
            let currentGrid = null;

            secao.campos.forEach(campo => {
                // Lógica para grids colunados
                const colClass = campo.col === '2col' ? 'form-grid--2col' : (campo.col === '3col' ? 'form-grid--3col' : '');
                
                if (campo.type === 'checklist') {
                    formHTML += `<div class="form-group"><label class="form-label">${campo.label}</label><div class="checklist-container">`;
                    for (let i = 1; i <= campo.count; i++) {
                        formHTML += `
                            <div class="checklist-item">
                                <input type="checkbox" class="checklist-checkbox save-target" id="${campo.id}_check_${secIndex}_${i}">
                                <input type="text" class="checklist-input save-target" id="${campo.id}_text_${secIndex}_${i}" placeholder="Descreva a ação...">
                            </div>`;
                    }
                    formHTML += `</div></div>`;
                } else {
                    let fieldHTML = `
                        <div class="form-group">
                            <label class="form-label" for="${campo.id}_${secIndex}">${campo.label}</label>
                            ${campo.type === 'text' 
                                ? `<input type="text" id="${campo.id}_${secIndex}" class="form-control save-target" placeholder="Digite aqui...">`
                                : `<textarea id="${campo.id}_${secIndex}" class="form-control save-target" rows="${campo.rows}" placeholder="Descreva detalhadamente..."></textarea>`
                            }
                        </div>`;
                    
                    if (colClass) {
                        formHTML += `<div class="form-grid ${colClass}">${fieldHTML}</div>`;
                    } else {
                        formHTML += fieldHTML;
                    }
                }
            });

            formHTML += `</div></div>`;
        });

        form.innerHTML = formHTML;

        // Auto-resize de textareas para melhorar UX
        document.querySelectorAll('textarea').forEach(ta => {
            ta.addEventListener('input', function() {
                this.style.height = 'auto';
                this.style.height = (this.scrollHeight) + 'px';
            });
        });

        // Lógica do LocalStorage
        const storageKey = `mws_recurso_${recurso.id}`;
        
        const saveToStorage = () => {
            const data = {};
            document.querySelectorAll('.save-target').forEach(input => {
                data[input.id] = input.type === 'checkbox' ? input.checked : input.value;
            });
            localStorage.setItem(storageKey, JSON.stringify(data));
        };

        const loadFromStorage = () => {
            const saved = JSON.parse(localStorage.getItem(storageKey));
            if (saved) {
                document.querySelectorAll('.save-target').forEach(input => {
                    if (saved[input.id] !== undefined) {
                        if (input.type === 'checkbox') input.checked = saved[input.id];
                        else input.value = saved[input.id];
                        // Dispara evento para auto-resize
                        if(input.tagName === 'TEXTAREA') input.dispatchEvent(new Event('input'));
                    }
                });
            }
        };

        loadFromStorage();
        document.querySelectorAll('.save-target').forEach(input => {
            input.addEventListener('input', saveToStorage);
            input.addEventListener('change', saveToStorage);
        });

        document.getElementById('btn-limpar').addEventListener('click', () => {
            if(confirm('Tem certeza que deseja limpar todos os dados preenchidos?')) {
                localStorage.removeItem(storageKey);
                document.querySelectorAll('.save-target').forEach(input => {
                    if(input.type === 'checkbox') input.checked = false;
                    else input.value = '';
                    if(input.tagName === 'TEXTAREA') input.style.height = 'auto';
                });
            }
        });

        document.getElementById('btn-imprimir').addEventListener('click', () => window.print());

// 1. IMPRIMIR PREENCHIDO
        document.getElementById('btn-imprimir').addEventListener('click', () => window.print());

        // 2. IMPRIMIR PDF EM BRANCO (Usa a janela nativa de forma inteligente)
        const btnBranco = document.getElementById('btn-imprimir-branco');
        if (btnBranco) {
            btnBranco.addEventListener('click', () => {
                // Salva o estado dos checkboxes para não perder o que o usuário marcou
                const checkboxes = document.querySelectorAll('.checklist-checkbox');
                const estadosCheckboxes = [];
                
                checkboxes.forEach(chk => {
                    estadosCheckboxes.push(chk.checked);
                    chk.checked = false; // Desmarca para a impressão em branco
                });

                // Adiciona uma classe ao body que vai ocultar os textos digitados via CSS
                document.body.classList.add('print-blank');

                // Chama a janela nativa de impressão/salvar PDF do navegador
                window.print();

                // Assim que a janela fechar, remove a classe e restaura os checks
                document.body.classList.remove('print-blank');
                checkboxes.forEach((chk, i) => {
                    chk.checked = estadosCheckboxes[i];
                });
            });
        }
    }
});