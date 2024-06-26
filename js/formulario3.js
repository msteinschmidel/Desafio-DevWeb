//Contato com águas da enchente

document.addEventListener('DOMContentLoaded', function() {
    const contatoEnchenteSim = document.getElementById('contatoEnchenteSim');
    const contatoEnchenteNao = document.getElementById('contatoEnchenteNao');
    const feridasExpostasSection = document.getElementById('feridasExpostasSection');
    const feridasExpostasSim = document.getElementById('feridasExpostasSim');
    const feridasExpostasNao = document.getElementById('feridasExpostasNao');

    function toggleFeridasExpostasSection(show) {
        if (show) {
            feridasExpostasSection.classList.remove('d-none');
            feridasExpostasSim.disabled = false;
            feridasExpostasNao.disabled = false;
        } else {
            feridasExpostasSection.classList.add('d-none');
            feridasExpostasSim.disabled = true;
            feridasExpostasNao.disabled = true;
            feridasExpostasSim.checked = false;
            feridasExpostasNao.checked = false;
        }
    }

    contatoEnchenteSim.addEventListener('change', function() {
        if (this.checked) {
            toggleFeridasExpostasSection(true);
        }
    });

    contatoEnchenteNao.addEventListener('change', function() {
        if (this.checked) {
            toggleFeridasExpostasSection(false);
        }
    });

    if (contatoEnchenteSim.checked) {
        toggleFeridasExpostasSection(true);
    } else {
        toggleFeridasExpostasSection(false);
    }
});


//Febre

document.addEventListener('DOMContentLoaded', function() {
    const febreSim = document.getElementById('febreSim');
    const febreNao = document.getElementById('febreNao');
    const febreSection = document.getElementById('febreSection');
    const temperaturaMaxima = document.getElementById('temperaturaMaxima');
    const calafriosSim = document.getElementById('calafriosSim');
    const calafriosNao = document.getElementById('calafriosNao');

    function toggleCamposFebre(show) {
        if (show) {
            febreSection.classList.remove('d-none');
            temperaturaMaxima.disabled = false;
            calafriosSim.disabled = false;
            calafriosNao.disabled = false;
        } else {
            febreSection.classList.add('d-none');
            temperaturaMaxima.disabled = true;
            calafriosSim.disabled = true;
            calafriosNao.disabled = true;
            temperaturaMaxima.value = '';
            calafriosSim.checked = false;
            calafriosNao.checked = false;
        }
    }

    febreSim.addEventListener('change', function() {
        if (this.checked) {
            toggleCamposFebre(true);
        }
    });

    febreNao.addEventListener('change', function() {
        if (this.checked) {
            toggleCamposFebre(false);
        }
    });

    if (febreSim.checked) {
        toggleCamposFebre(true);
    } else {
        toggleCamposFebre(false);
    }

    temperaturaMaxima.addEventListener('input', function() {
        let value = this.value.replace(/[^\d]/g, ''); 

        if (value.length > 3) {
            value = value.substring(0, 3); 
        }

        if (value.length === 3) {
            value = value.slice(0, 2) + ',' + value.slice(2);
        }

        this.value = value;
    });

    temperaturaMaxima.addEventListener('keydown', function(event) {
        if (event.key === 'Backspace' || event.key === 'Delete') {
            let value = this.value.replace(',', ''); 

            if (value.length === 3) {
                value = value.slice(0, 2); 
            } else if (value.length === 2) {
                value = value.slice(0, 1); 
            } else if (value.length === 1) {
                value = ''; 
            }

            this.value = value;
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const doresSim = document.getElementById('doresSim');
    const doresNao = document.getElementById('doresNao');
    const DoresMuscularesSection = document.getElementById('DoresMuscularesSection');
    const bodyPartsCheckboxes = document.querySelectorAll('#DoresMuscularesSection input[type="checkbox"]');
    const outraDor = document.getElementById('outraDor');

    function toggleBodyParts(show) {
        if (show) {
            DoresMuscularesSection.classList.remove('d-none');
            bodyPartsCheckboxes.forEach(checkbox => {
                checkbox.disabled = false;
            });
            outraDor.disabled = false;
        } else {
            DoresMuscularesSection.classList.add('d-none');
            bodyPartsCheckboxes.forEach(checkbox => {
                checkbox.disabled = true;
                checkbox.checked = false;
            });
            outraDor.disabled = true;
            outraDor.value = '';
        }
    }

    doresSim.addEventListener('change', function() {
        if (this.checked) {
            toggleBodyParts(true);
        }
    });

    doresNao.addEventListener('change', function() {
        if (this.checked) {
            toggleBodyParts(false);
        }
    });

    if (doresSim.checked) {
        toggleBodyParts(true);
    } else {
        toggleBodyParts(false);
    }
});


//Dor de cabeça
document.addEventListener('DOMContentLoaded', function() {
    const doresSim = document.getElementById('doresSim');
    const doresNao = document.getElementById('doresNao');
    const bodyPartsCheckboxes = document.querySelectorAll('#bodyParts input[type="checkbox"]');
    const outraDor = document.getElementById('outraDor');
    const dorCabecaSim = document.getElementById('dorCabecaSim');
    const dorCabecaNao = document.getElementById('dorCabecaNao');
    const dorCabecaDetails = document.getElementById('dorCabecaDetails');
    const intensidadeDorRadios = document.querySelectorAll('input[name="intensidadeDor"]');
    const localDorRadios = document.querySelectorAll('input[name="localDor"]');
    const frequenciaDorRadios = document.querySelectorAll('input[name="frequenciaDor"]');

    function toggleBodyParts(enabled) {
        bodyPartsCheckboxes.forEach(checkbox => {
            checkbox.disabled = !enabled;
            if (!enabled) {
                checkbox.checked = false;
            }
        });
        outraDor.disabled = !enabled;
        if (!enabled) {
            outraDor.value = '';
        }
    }

    function toggleDorCabecaDetails(enabled) {
        dorCabecaDetails.classList.toggle('d-none', !enabled);
        intensidadeDorRadios.forEach(radio => radio.disabled = !enabled);
        localDorRadios.forEach(radio => radio.disabled = !enabled);
        frequenciaDorRadios.forEach(radio => radio.disabled = !enabled);

        if (!enabled) {
            intensidadeDorRadios.forEach(radio => radio.checked = false);
            localDorRadios.forEach(radio => radio.checked = false);
            frequenciaDorRadios.forEach(radio => radio.checked = false);
        }
    }

    doresSim.addEventListener('change', function() {
        if (this.checked) {
            toggleBodyParts(true);
        }
    });

    doresNao.addEventListener('change', function() {
        if (this.checked) {
            toggleBodyParts(false);
        }
    });

    dorCabecaSim.addEventListener('change', function() {
        if (this.checked) {
            toggleDorCabecaDetails(true);
        }
    });

    dorCabecaNao.addEventListener('change', function() {
        if (this.checked) {
            toggleDorCabecaDetails(false);
        }
    });

    if (doresSim.checked) {
        toggleBodyParts(true);
    } else {
        toggleBodyParts(false);
    }

    if (dorCabecaSim.checked) {
        toggleDorCabecaDetails(true);
    } else {
        toggleDorCabecaDetails(false);
    }
});

//Problemas gastrointestinais
document.addEventListener('DOMContentLoaded', function() {
    const nauseaVomitoSim = document.getElementById('nauseaVomitoSim');
    const nauseaVomitoNao = document.getElementById('nauseaVomitoNao');
    const diarreiaSim = document.getElementById('diarreiaSim');
    const diarreiaNao = document.getElementById('diarreiaNao');
    const frequenciaDiarreia = document.getElementById('frequenciaDiarreia');
    const frequenciaDiarreiaRadios = document.querySelectorAll('input[name="frequenciaDiarreiaOp"]');

    function toggleFrequenciaDiarreia(enabled) {
        frequenciaDiarreia.classList.toggle('d-none', !enabled);
        frequenciaDiarreiaRadios.forEach(radio => radio.disabled = !enabled);

        if (!enabled) {
            frequenciaDiarreiaRadios.forEach(radio => radio.checked = false);
        }
    }

    function checkGastrointestinalProblems() {
        if (nauseaVomitoSim.checked || diarreiaSim.checked) {
            toggleFrequenciaDiarreia(true);
        } else {
            toggleFrequenciaDiarreia(false);
        }
    }

    nauseaVomitoSim.addEventListener('change', checkGastrointestinalProblems);
    nauseaVomitoNao.addEventListener('change', checkGastrointestinalProblems);
    diarreiaSim.addEventListener('change', checkGastrointestinalProblems);
    diarreiaNao.addEventListener('change', checkGastrointestinalProblems);

    checkGastrointestinalProblems();
});

// Problemas respiratórios
document.addEventListener('DOMContentLoaded', function() {
    // Problemas Respiratórios
    const tosseSim = document.getElementById('tosseSim');
    const tosseNao = document.getElementById('tosseNao');
    const TosseSection = document.getElementById('TosseSection');
    const tipoTosseRadios = document.querySelectorAll('#TosseSection input[type="radio"]');

    const dificuldadeRespirarSim = document.getElementById('dificuldadeRespirarSim');
    const dificuldadeRespirarNao = document.getElementById('dificuldadeRespirarNao');
    const IntensidadeDificuldadeRespirarSection = document.getElementById('IntensidadeDificuldadeRespirarSection');
    const intensidadeRadios = document.querySelectorAll('#IntensidadeDificuldadeRespirarSection input[type="radio"]');

    function toggleTosseSection(show) {
        if (show) {
            TosseSection.classList.remove('d-none');
            tipoTosseRadios.forEach(radio => {
                radio.disabled = false;
            });
        } else {
            TosseSection.classList.add('d-none');
            tipoTosseRadios.forEach(radio => {
                radio.disabled = true;
                radio.checked = false;
            });
        }
    }

    function toggleIntensidadeDificuldadeRespirarSection(show) {
        if (show) {
            IntensidadeDificuldadeRespirarSection.classList.remove('d-none');
            intensidadeRadios.forEach(radio => {
                radio.disabled = false;
            });
        } else {
            IntensidadeDificuldadeRespirarSection.classList.add('d-none');
            intensidadeRadios.forEach(radio => {
                radio.disabled = true;
                radio.checked = false;
            });
        }
    }

    tosseSim.addEventListener('change', function() {
        if (this.checked) {
            toggleTosseSection(true);
        }
    });

    tosseNao.addEventListener('change', function() {
        if (this.checked) {
            toggleTosseSection(false);
        }
    });

    dificuldadeRespirarSim.addEventListener('change', function() {
        if (this.checked) {
            toggleIntensidadeDificuldadeRespirarSection(true);
        }
    });

    dificuldadeRespirarNao.addEventListener('change', function() {
        if (this.checked) {
            toggleIntensidadeDificuldadeRespirarSection(false);
        }
    });

    if (tosseSim.checked) {
        toggleTosseSection(true);
    } else {
        toggleTosseSection(false);
    }

    if (dificuldadeRespirarSim.checked) {
        toggleIntensidadeDificuldadeRespirarSection(true);
    } else {
        toggleIntensidadeDificuldadeRespirarSection(false);
    }
});

//Sintomas de pele

document.addEventListener('DOMContentLoaded', function() {
    // Sintomas de Pele
    const peleSim = document.getElementById('peleSim');
    const peleNao = document.getElementById('peleNao');
    const PeleSection = document.getElementById('PeleSection');
    const parteCorpo = document.getElementById('parteCorpo');

    function togglePeleSection(show) {
        if (show) {
            PeleSection.classList.remove('d-none');
            parteCorpo.disabled = false;
        } else {
            PeleSection.classList.add('d-none');
            parteCorpo.disabled = true;
            parteCorpo.value = '';
        }
    }

    peleSim.addEventListener('change', function() {
        if (this.checked) {
            togglePeleSection(true);
        }
    });

    peleNao.addEventListener('change', function() {
        if (this.checked) {
            togglePeleSection(false);
        }
    });

    if (peleSim.checked) {
        togglePeleSection(true);
    } else {
        togglePeleSection(false);
    }
});

//Exposição a animais
document.addEventListener('DOMContentLoaded', function() {
    // Histórico de Exposição a Animais
    const animaisSim = document.getElementById('animaisSim');
    const animaisNao = document.getElementById('animaisNao');
    const AnimaisSection = document.getElementById('AnimaisSection');
    const tipoAnimal = document.getElementById('tipoAnimal');

    function toggleAnimaisSection(show) {
        if (show) {
            AnimaisSection.classList.remove('d-none');
            tipoAnimal.disabled = false;
        } else {
            AnimaisSection.classList.add('d-none');
            tipoAnimal.disabled = true;
            tipoAnimal.value = '';
        }
    }

    animaisSim.addEventListener('change', function() {
        if (this.checked) {
            toggleAnimaisSection(true);
        }
    });

    animaisNao.addEventListener('change', function() {
        if (this.checked) {
            toggleAnimaisSection(false);
        }
    });

    if (animaisSim.checked) {
        toggleAnimaisSection(true);
    } else {
        toggleAnimaisSection(false);
    }
});

//Outros sintomas
document.addEventListener('DOMContentLoaded', function() {
    // Outros Sintomas
    const outrosSintomasSim = document.getElementById('outrosSintomasSim');
    const outrosSintomasNao = document.getElementById('outrosSintomasNao');
    const OutrosSintomasSection = document.getElementById('OutrosSintomasSection');
    const descricaoOutrosSintomas = document.getElementById('descricaoOutrosSintomas');

    function toggleOutrosSintomasSection(show) {
        if (show) {
            OutrosSintomasSection.classList.remove('d-none');
            descricaoOutrosSintomas.disabled = false;
        } else {
            OutrosSintomasSection.classList.add('d-none');
            descricaoOutrosSintomas.disabled = true;
            descricaoOutrosSintomas.value = '';
        }
    }

    outrosSintomasSim.addEventListener('change', function() {
        if (this.checked) {
            toggleOutrosSintomasSection(true);
        }
    });

    outrosSintomasNao.addEventListener('change', function() {
        if (this.checked) {
            toggleOutrosSintomasSection(false);
        }
    });

    if (outrosSintomasSim.checked) {
        toggleOutrosSintomasSection(true);
    } else {
        toggleOutrosSintomasSection(false);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    function mostraModal() {
        const Modal = new bootstrap.Modal(document.getElementById('Modal'));
        Modal.show();
    }

    const finalizarButton = document.querySelector('a[role="button"][href="index.html"]');
    if (finalizarButton) {
        finalizarButton.addEventListener('click', function(event) {
            event.preventDefault();
            mostraModal();
        });
    }
});

