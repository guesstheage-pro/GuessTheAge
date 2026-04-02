/* --- DIZIONARIO LINGUE AGGIORNATO --- */
const translations = {
    it: {
        tHomeTop: "THE GAME OF PERCEPTION",
        tHomeMid: "PUOI DECODIFICARE LA LINEA DEL TEMPO UMANA?",
        tBtnPlay: "PLAY",
        tHomeBot: "UN ESPERIMENTO SOCIALE SULLA PERCEZIONE",
        tDiscTop: "AVVISO DI PROTOCOLLO 04-B",
        tDiscTitle1: "Percezione",
        tDiscP1: "Le immagini presentate sono generate tramite algoritmi di sintesi neurale basati sullo studio <strong>'Trans-Global Aging Perception'</strong>.",
        tDiscP2: "L'invecchiamento umano varia drasticamente in base a <span class='highlight-word'>latitudine</span>, <span class='highlight-word'>cortisolo endogeno</span> ed <span class='highlight-word'>epigenetica regionale</span>.",
        tDiscP3: "Pertanto, alcune età potrebbero <strong>differire dai tuoi canoni estetici locali</strong>. Il test sfida la tua capacità di decodificare l'età biologica universale, superando i bias culturali.",
        tBtnPros: "PROSEGUI →",
        tDiscBot: "IDENTIFICAZIONE SOGGETTI NELLA SCHERMATA SUCCESSIVA",
        tBackLang: "← CAMBIA LINGUA",
        tBack: "← INDIETRO",
        tModeTitle: "Scegli la modalità",
        tModeSub: "SELEZIONA COME VUOI GIOCARE",
        nameScalata: "Scalata 5 Vite",
        nameBlitz: "Blitz 60s",
        nameHL: "Chi è più vecchio?",
        nameVersus: "Versus",
        badgeDisp1: "DISPONIBILE",
        badgeDisp2: "DISPONIBILE",
        badgeDisp3: "NUOVO",
        badgeSoon: "PROSSIMAMENTE",
        btnStartMain: "INIZIA →",
        btnSoon: "PROSSIMAMENTE",
        tTime: "TEMPO:",
        tScore: "PUNTI:",
        hintScalata: "INDIVIDUA L'ETÀ CORRETTA",
        hintBlitz: "SII PIÙ VELOCE CHE PUOI!",
        hintHL: "CHI HA L'ETÀ MAGGIORE?",
        btnShareMain: "📤 CONDIVIDI SFIDA",
        btnReplayMain: "🔄 RIGIOCA",
        btnMenuMain: "Cambia modalità",
        tUpdateMsg: "IL SITO È IN COSTANTE AGGIORNAMENTO PER MIGLIORARE L'ESPERIENZA",
        shareText: "Ho fatto {score} punti a 'Guess The Age' ({mode})! 😎 Scommetto che non riesci a battermi. Prova qui: ",
        gameOverMessages: {
            lowTitle: "OPS...", lowEmoji: "😅", lowMsg: "Magari avevi il sole negli occhi? Riprova!",
            midTitle: "NON MALE!", midEmoji: "🙂", midMsg: "Hai un buon istinto, ma quelle rughe ti hanno ingannato!",
            highTitle: "FENOMENO!", highEmoji: "🏆", highMsg: "Hai un occhio bionico. Sei un esperto di biologia umana!"
        },
        contactPlaceholder: "Messaggio...",
        contactNamePlaceholder: "Il tuo nome",
        btnContactMain: "📧 SCRIVI AL CREATORE",
        contactTitle: "CONTATTA L'AUTORE",
        contactSend: "INVIA MESSAGGIO",
        contactClose: "CHIUDI",
        btnExit: "← ESCI",
        reviveTitle: "SECONDA CHANCE!",
        reviveMsgScalata: "Guarda un breve video per riavere le tue 5 VITE e continuare!",
        reviveMsgHL: "Guarda un breve video per annullare l'errore e continuare!",
        btnWatchAd: "▶ GUARDA VIDEO (15s)",
        btnDeclineAd: "No, accetta la sconfitta",
        cookieMsg: "Utilizziamo i cookie per migliorare l'esperienza di gioco e mostrare annunci personalizzati.",
        cookieAcceptAll: "Accetta Tutti",
        cookieEssential: "Solo Essenziali"
    },
    en: {
        tHomeTop: "THE GAME OF PERCEPTION",
        tHomeMid: "CAN YOU DECODE THE HUMAN TIMELINE?",
        tBtnPlay: "PLAY",
        tHomeBot: "A SOCIAL EXPERIMENT ON PERCEPTION",
        tDiscTop: "PROTOCOL 04-B NOTICE",
        tDiscTitle1: "Biometric",
        tDiscP1: "The images presented are generated via neural synthesis algorithms based on the <strong>'Trans-Global Aging Perception'</strong> study.",
        tDiscP2: "Human aging varies drastically based on <span class='highlight-word'>latitude</span>, <span class='highlight-word'>endogenous cortisol</span>, and <span class='highlight-word'>regional epigenetics</span>.",
        tDiscP3: "Therefore, some ages might <strong>differ from your local aesthetic standards</strong>. The test challenges your ability to decode universal biological age, bypassing cultural biases.",
        tBtnPros: "PROCEED →",
        tDiscBot: "SUBJECT IDENTIFICATION ON NEXT SCREEN",
        tBackLang: "← CHANGE LANGUAGE",
        tBack: "← BACK",
        tModeTitle: "Choose Mode",
        tModeSub: "SELECT HOW YOU WANT TO PLAY",
        nameScalata: "5 Lives Climb",
        nameBlitz: "Blitz 60s",
        nameHL: "Who is older?",
        nameVersus: "Versus",
        badgeDisp1: "AVAILABLE",
        badgeDisp2: "AVAILABLE",
        badgeDisp3: "NEW",
        badgeSoon: "COMING SOON",
        btnStartMain: "START →",
        btnSoon: "COMING SOON",
        tTime: "TIME:",
        tScore: "SCORE:",
        hintScalata: "GUESS THE CORRECT AGE",
        hintBlitz: "BE AS FAST AS YOU CAN!",
        hintHL: "WHO IS OLDER?",
        btnShareMain: "📤 SHARE CHALLENGE",
        btnReplayMain: "🔄 PLAY AGAIN",
        btnMenuMain: "Change Game Mode",
        tUpdateMsg: "THE SITE IS CONSTANTLY UPDATED TO IMPROVE THE EXPERIENCE",
        shareText: "I scored {score} points on 'Guess The Age' ({mode})! 😎 Bet you can't beat me. Try here: ",
        gameOverMessages: {
            lowTitle: "OOPS...", lowEmoji: "😅", lowMsg: "Maybe the sun was in your eyes? Try again!",
            midTitle: "NOT BAD!", midEmoji: "🙂", midMsg: "You have good instincts, but those wrinkles tricked you!",
            highTitle: "PHENOM!", highEmoji: "🏆", highMsg: "You have a bionic eye. You're a human biology expert!"
        },
        contactPlaceholder: "Message...",
        contactNamePlaceholder: "Your name",
        btnContactMain: "📧 CONTACT CREATOR",
        contactTitle: "CONTACT THE AUTHOR",
        contactSend: "SEND MESSAGE",
        contactClose: "CLOSE",
        btnExit: "← EXIT",
        reviveTitle: "SECOND CHANCE!",
        reviveMsgScalata: "Watch a short video to refill your 5 LIVES and continue!",
        reviveMsgHL: "Watch a short video to undo your mistake and continue!",
        btnWatchAd: "▶ WATCH VIDEO (15s)",
        btnDeclineAd: "No, accept defeat",
        cookieMsg: "We use cookies to improve your gaming experience and show personalized ads.",
        cookieAcceptAll: "Accept All",
        cookieEssential: "Essential Only"
    },
    es: {
        tHomeTop: "EL JUEGO DE LA PERCEPCIÓN",
        tHomeMid: "¿PUEDES DECODIFICAR LA LÍNEA DEL TIEMPO HUMANA?",
        tBtnPlay: "JUGAR",
        tHomeBot: "UN EXPERIMENTO SOCIAL SOBRE LA PERCEPCIÓN",
        tDiscTop: "AVISO DE PROTOCOLO 04-B",
        tDiscTitle1: "Percepción",
        tDiscP1: "Las imágenes presentadas son generadas mediante algoritmos de síntesis neuronal basados en el estudio <strong>'Trans-Global Aging Perception'</strong>.",
        tDiscP2: "El envejecimiento humano varía drásticamente según la <span class='highlight-word'>latitud</span>, el <span class='highlight-word'>cortisol endógeno</span> y la <span class='highlight-word'>epigenética regional</span>.",
        tDiscP3: "Por lo tanto, algunas edades podrían <strong>diferir de tus estándares estéticos locales</strong>. El test desafía tu capacidad...",
        tBtnPros: "CONTINUAR →",
        tDiscBot: "IDENTIFICACIÓN DE SUJETOS EN LA SIGUIENTE PANTALLA",
        tBackLang: "← CAMBIAR IDIOMA",
        tBack: "← VOLVER",
        tModeTitle: "Elige el modo",
        tModeSub: "SELECCIONA CÓMO QUIERES JUGAR",
        nameScalata: "Escalada 5 Vidas",
        nameBlitz: "Blitz 60s",
        nameHL: "¿Quién es mayor?",
        nameVersus: "Versus",
        badgeDisp1: "DISPONIBLE",
        badgeDisp2: "DISPONIBLE",
        badgeDisp3: "NUEVO",
        badgeSoon: "PRÓXIMAMENTE",
        btnStartMain: "EMPEZAR →",
        btnSoon: "PRÓXIMAMENTE",
        tTime: "TIEMPO:",
        tScore: "PUNTOS:",
        hintScalata: "ADIVINA LA EDAD CORRECTA",
        hintBlitz: "¡SÉ LO MÁS RÁPIDO QUE PUEDAS!",
        hintHL: "¿QUIÉN ES MAYOR?",
        btnShareMain: "📤 COMPARTIR RETO",
        btnReplayMain: "🔄 VOLVER A JUGAR",
        btnMenuMain: "Cambiar modo de juego",
        tUpdateMsg: "EL SITIO ESTÁ EN CONSTANTE ACTUALIZACIÓN",
        shareText: "¡Hice {score} puntos en 'Guess The Age' ({mode})! 😎 Apuesto a que no puedes vencerme. Prueba aquí: ",
        gameOverMessages: { 
            lowTitle: "UPS...", lowEmoji: "😅", lowMsg: "¿Tal vez tenías el sol en los ojos? ¡Intenta de nuevo!", 
            midTitle: "¡NADA MAL!", midEmoji: "🙂", midMsg: "Tienes buen instinto, ¡pero esas arrugas te engañaron!", 
            highTitle: "¡FENÓMENO!", highEmoji: "🏆", highMsg: "Tienes un ojo biónico. ¡Eres un experto!" 
        },
        contactPlaceholder: "Mensaje...",
        contactNamePlaceholder: "Tu nombre",
        btnContactMain: "📧 CONTACTAR CREADOR",
        contactTitle: "CONTACTAR AL AUTOR",
        contactSend: "ENVIAR MENSAJE",
        contactClose: "CERRAR",
        btnExit: "← SALIR",
        reviveTitle: "¡SEGUNDA OPORTUNIDAD!",
        reviveMsgScalata: "¡Mira un breve video para recargar tus 5 VIDAS y continuar!",
        reviveMsgHL: "¡Mira un video para deshacer tu error y continuar!",
        btnWatchAd: "▶ VER VIDEO (15s)",
        btnDeclineAd: "No, aceptar la derrota",
        cookieMsg: "Usamos cookies para mejorar tu experiencia y mostrar anuncios.",
        cookieAcceptAll: "Aceptar Todo",
        cookieEssential: "Solo Esenciales"
    },
    fr: {
        tHomeTop: "LE JEU DE LA PERCEPTION",
        tHomeMid: "POUVEZ-VOUS DÉCODER LA CHRONOLOGIE HUMAINE ?",
        tBtnPlay: "JOUER",
        tHomeBot: "UNE EXPÉRIENCE SOCIALE SUR LA PERCEPTION",
        tDiscTop: "AVIS DE PROTOCOLO 04-B",
        tDiscTitle1: "Perception",
        tDiscP1: "Les images présentées sont générées via des algorithmes de synthèse neurale basés sur l'étude <strong>'Trans-Global Aging Perception'</strong>.",
        tDiscP2: "Le vieillissement humain varie considérablement en fonction de la <span class='highlight-word'>latitude</span>, du <span class='highlight-word'>cortisol endogène</span> et de l'<span class='highlight-word'>épigénétique régionale</span>.",
        tDiscP3: "Par conséquent, certains âges pourraient <strong>différer de vos normes esthétiques locales</strong>. Le test met au défi votre capacité à décoder l'âge biologique universel.",
        tBtnPros: "CONTINUER →",
        tDiscBot: "IDENTIFICATION DES SUJETS SUR L'ÉCRAN SUIVANT",
        tBackLang: "← CHANGER DE LANGUE",
        tBack: "← RETOUR",
        tModeTitle: "Choisissez le mode",
        tModeSub: "SÉLECTIONNEZ COMMENT VOUS VOULEZ JOUER",
        nameScalata: "Ascension 5 Vies",
        nameBlitz: "Blitz 60s",
        nameHL: "Qui est le plus vieux ?",
        nameVersus: "Versus",
        badgeDisp1: "DISPONIBLE",
        badgeDisp2: "DISPONIBLE",
        badgeDisp3: "NOUVEAU",
        badgeSoon: "BIENTÔT",
        btnStartMain: "COMMENCER →",
        btnSoon: "BIENTÔT",
        tTime: "TEMPS:",
        tScore: "SCORE:",
        hintScalata: "DEVINEZ L'ÂGE EXACT",
        hintBlitz: "SOYEZ AUSSI RAPIDE QUE POSSIBLE !",
        hintHL: "QUI EST LE PLUS ÂGÉ ?",
        btnShareMain: "📤 PARTAGER LE DÉFI",
        btnReplayMain: "🔄 REJOUER",
        btnMenuMain: "Changer de mode",
        tUpdateMsg: "LE SITE EST CONSTAMMENT MIS À JOUR",
        shareText: "J'ai marqué {score} points à 'Guess The Age' ({mode}) ! 😎 Je parie que tu ne peux pas me battre. Essaie ici: ",
        gameOverMessages: { 
            lowTitle: "OUPS...", lowEmoji: "😅", lowMsg: "Le soleil était dans vos yeux ? Réessayez !", 
            midTitle: "PAS MAL !", midEmoji: "🙂", midMsg: "Vous avez un bon instinct, mais ces rides vous ont trompé !", 
            highTitle: "PHÉNOMÈNE !", highEmoji: "🏆", highMsg: "Vous avez un œil bionique. Vous êtes un expert !" 
        },
        contactPlaceholder: "Message...",
        contactNamePlaceholder: "Votre nom",
        btnContactMain: "📧 CONTACTER LE CRÉATEUR",
        contactTitle: "CONTACTER L'AUTEUR",
        contactSend: "ENVOYER LE MESSAGE",
        contactClose: "FERMER",
        btnExit: "← QUITTER",
        reviveTitle: "SECONDE CHANCE !",
        reviveMsgScalata: "Regardez une vidéo pour recharger vos 5 VIES !",
        reviveMsgHL: "Regardez une vidéo pour annuler l'erreur !",
        btnWatchAd: "▶ VOIR LA VIDÉO (15s)",
        btnDeclineAd: "Non, accepter la défaite",
        cookieMsg: "Nous utilisons des cookies pour améliorer votre expérience.",
        cookieAcceptAll: "Tout Accepter",
        cookieEssential: "Essentiels Uniquement"
    },
    de: {
        tHomeTop: "DAS SPIEL DER WAHRNEHMUNG",
        tHomeMid: "KANNST DU DIE MENSCHLICHE ZEITLEISTE ENTSCHLÜSSELN?",
        tBtnPlay: "SPIELEN",
        tHomeBot: "EIN SOZIALES EXPERIMENT ZUR WAHRNEHMUNG",
        tDiscTop: "PROTOKOLL 04-B HINWEIS",
        tDiscTitle1: "Wahrnehmung",
        tDiscP1: "Die gezeigten Bilder werden durch neuronale Synthese-Algorithmen basierend auf der <strong>'Trans-Global Aging Perception'</strong>-Studie generiert.",
        tDiscP2: "Das menschliche Altern variiert drastisch je nach <span class='highlight-word'>Breitengrad</span>, <span class='highlight-word'>endogenem Cortisol</span> und <span class='highlight-word'>regionaler Epigenetik</span>.",
        tDiscP3: "Daher könnten einige Alter <strong>von deinen lokalen ästhetischen Standards abweichen</strong>. Der Test fordert deine Fähigkeit heraus...",
        tBtnPros: "WEITER →",
        tDiscBot: "IDENTIFIKATION DER PERSONEN",
        tBackLang: "← SPRACHE ÄNDERN",
        tBack: "← ZURÜCK",
        tModeTitle: "Modus wählen",
        tModeSub: "WÄHLE WIE DU SPIELEN MÖCHTEST",
        nameScalata: "Aufstieg 5 Leben",
        nameBlitz: "Blitz 60s",
        nameHL: "Wer ist älter?",
        nameVersus: "Versus",
        badgeDisp1: "VERFÜGBAR",
        badgeDisp2: "VERFÜGBAR",
        badgeDisp3: "NEU",
        badgeSoon: "DEMNÄCHST",
        btnStartMain: "STARTEN →",
        btnSoon: "DEMNÄCHST",
        tTime: "ZEIT:",
        tScore: "PUNKTE:",
        hintScalata: "ERRATE DAS RICHTIGE ALTER",
        hintBlitz: "SEI SO SCHNELL WIE MÖGLICH!",
        hintHL: "WER IST ÄLTER?",
        btnShareMain: "📤 HERAUSFORDERUNG TEILEN",
        btnReplayMain: "🔄 NOCHMAL SPIELEN",
        btnMenuMain: "Spielmodus ändern",
        tUpdateMsg: "DIE SEITE WIRD STÄNDIG AKTUALISIERT",
        shareText: "Ich habe {score} Punkte bei 'Guess The Age' ({mode}) erzielt! 😎 Wetten, du kannst mich nicht schlagen? Versuch es hier: ",
        gameOverMessages: { 
            lowTitle: "UPS...", lowEmoji: "😅", lowMsg: "Vielleicht war die Sonne in deinen Augen? Versuch es noch einmal!", 
            midTitle: "NICHT SCHLECHT!", midEmoji: "🙂", midMsg: "Du hast gute Instinkte, aber diese Falten haben dich getäuscht!", 
            highTitle: "PHÄNOMEN!", highEmoji: "🏆", highMsg: "Du hast ein bionisches Auge. Du bist ein Experte!" 
        },
        contactPlaceholder: "Nachricht...",
        contactNamePlaceholder: "Dein Name",
        btnContactMain: "📧 SCHÖPFER KONTAKTIEREN",
        contactTitle: "AUTOR KONTAKTIEREN",
        contactSend: "NACHRICHT SENDEN",
        contactClose: "SCHLIESSEN",
        btnExit: "← VERLASSEN",
        reviveTitle: "ZWEITE CHANCE!",
        reviveMsgScalata: "Schau ein Video, um 5 LEBEN aufzufüllen!",
        reviveMsgHL: "Schau ein Video, um deinen Fehler rückgängig zu machen!",
        btnWatchAd: "▶ VIDEO ANSEHEN (15s)",
        btnDeclineAd: "Nein, Niederlage akzeptieren",
        cookieMsg: "Wir verwenden Cookies für eine bessere Erfahrung.",
        cookieAcceptAll: "Alle Akzeptieren",
        cookieEssential: "Nur Essenzielle"
    },
    pt: {
        tHomeTop: "O JOGO DA PERCEPÇÃO",
        tHomeMid: "VOCÊ CONSEGUE DECODIFICAR A LINHA DO TEMPO HUMANA?",
        tBtnPlay: "JOGAR",
        tHomeBot: "UM EXPERIMENTO SOCIAL SOBRE PERCEPÇÃO",
        tDiscTop: "AVISO DE PROTOCOLO 04-B",
        tDiscTitle1: "Percepção",
        tDiscP1: "As imagens apresentadas são geradas através de algoritmos de síntesis neural baseados no estudo <strong>'Trans-Global Aging Perception'</strong>.",
        tDiscP2: "O envelhecimento humano varia drasticamente de acordo com a <span class='highlight-word'>latitude</span>, o <span class='highlight-word'>cortisol endógeno</span> e a <span class='highlight-word'>epigenética regional</span>.",
        tDiscP3: "Portanto, algumas idades podem <strong>diferir dos seus padrões estéticos locais</strong>. O teste desafia a sua capacidade de decodificar a idade biológica universal.",
        tBtnPros: "AVANÇAR →",
        tDiscBot: "IDENTIFICAÇÃO DE SUJEITOS NA PRÓXIMA TELA",
        tBackLang: "← MUDAR IDIOMA",
        tBack: "← VOLTAR",
        tModeTitle: "Escolha o modo",
        tModeSub: "SELECIONE COMO VOCÊ QUER JOGAR",
        nameScalata: "Escalada 5 Vidas",
        nameBlitz: "Blitz 60s",
        nameHL: "Quem é mais velho?",
        nameVersus: "Versus",
        badgeDisp1: "DISPONÍVEL",
        badgeDisp2: "DISPONÍVEL",
        badgeDisp3: "NOVO",
        badgeSoon: "EM BREVE",
        btnStartMain: "COMEÇAR →",
        btnSoon: "EM BREVE",
        tTime: "TEMPO:",
        tScore: "PONTOS:",
        hintScalata: "ADIVINHE A IDADE CORRETA",
        hintBlitz: "SEJA O MAIS RÁPIDO POSSÍVEL!",
        hintHL: "QUEM É MAIS VELHO?",
        btnShareMain: "📤 COMPARTILHAR DESAFIO",
        btnReplayMain: "🔄 JOGAR NOVAMENTE",
        btnMenuMain: "Mudar modo de jogo",
        tUpdateMsg: "O SITE ESTÁ EM CONSTANTE ATUALIZAÇÃO",
        shareText: "Fiz {score} pontos no 'Guess The Age' ({mode})! 😎 Aposto que você não consegue me vencer. Tente aqui: ",
        gameOverMessages: { 
            lowTitle: "OPS...", lowEmoji: "😅", lowMsg: "Talvez o sol estivesse nos seus olhos? Tente novamente!", 
            midTitle: "NADA MAU!", midEmoji: "🙂", midMsg: "Você tem bons instintos, mas essas rugas te enganaram!", 
            highTitle: "FENÔMENO!", highEmoji: "🏆", highMsg: "Você tem um olho biônico. Você é um especialista!" 
        },
        contactPlaceholder: "Mensagem...",
        contactNamePlaceholder: "Seu nome",
        btnContactMain: "📧 CONTATAR CRIADOR",
        contactTitle: "CONTATAR O AUTOR",
        contactSend: "ENVIAR MENSAGEM",
        contactClose: "FECHAR",
        btnExit: "← SAIR",
        reviveTitle: "SEGUNDA CHANCE!",
        reviveMsgScalata: "Assista a um vídeo para recarregar suas 5 VIDAS!",
        reviveMsgHL: "Assista a um vídeo para desfazer seu erro!",
        btnWatchAd: "▶ ASSISTIR VÍDEO (15s)",
        btnDeclineAd: "Não, aceitar a derrota",
        cookieMsg: "Usamos cookies para melhorar sua experiência.",
        cookieAcceptAll: "Aceitar Tudo",
        cookieEssential: "Apenas Essenciais"
    }
};

/* DATI MODALITÀ MULTILINGUE */
const modeData = {
    'scalata': {
        it: { title: '❤ Scalata 5 Vite', desc: 'Parti con 5 vite. Ogni risposta sbagliata ne perdi una. Ogni 10 risposte corrette guadagni 5 vite extra. Massimo 20 vite.', rules: ['• 5 vite iniziali (max 20)', '• Risposta Corretta = +10 punti', '• Errore = -1 vita', '• Ogni 10 risposte corrette = +5 vite'] },
        en: { title: '❤ 5 Lives Climb', desc: 'Start with 5 lives. Lose one for every wrong answer. Gain 5 extra lives for every 10 correct answers. Max 20 lives.', rules: ['• 5 starting lives (max 20)', '• Correct Answer = +10 points', '• Mistake = -1 life', '• Every 10 correct = +5 lives'] },
        es: { title: '❤ Escalada 5 Vidas', desc: 'Empieza con 5 vidas. Pierdes una por cada respuesta incorrecta. Gana 5 vidas extra por cada 10 respuestas correctas. Máximo 20 vidas.', rules: ['• 5 vidas iniciales', '• Respuesta Correcta = +10 ptos', '• Error = -1 vida', '• Cada 10 correctas = +5 vidas'] },
        fr: { title: '❤ Ascension 5 Vies', desc: 'Commencez avec 5 vies. Perdez-en une pour chaque mauvaise réponse. Gagnez 5 vies pour 10 bonnes réponses. Max 20 vies.', rules: ['• 5 vies de départ', '• Bonne réponse = +10 pts', '• Erreur = -1 vie', '• 10 bonnes = +5 vies'] },
        de: { title: '❤ Aufstieg 5 Leben', desc: 'Starte mit 5 Leben. Verliere eins für jede falsche Antwort. Erhalte 5 Extraleben für jede 10 richtigen Antworten. Max 20 Leben.', rules: ['• 5 Startleben', '• Richtige Antwort = +10 Pkt', '• Fehler = -1 Leben', '• 10 Richtige = +5 Leben'] },
        pt: { title: '❤ Escalada 5 Vidas', desc: 'Comece com 5 vidas. Perca uma por cada resposta errada. Ganhe 5 vidas extras a cada 10 respostas corretas. Máximo 20 vidas.', rules: ['• 5 vidas iniciais', '• Resposta Correta = +10 pts', '• Erro = -1 vida', '• 10 corretas = +5 vidas'] },
        available: true
    },
    'blitz': {
        it: { title: '⚡ Blitz 60s', desc: 'Hai solo 60 secondi. Rispondi più velocemente possibile. Nessun errore ti ferma, solo il tempo!', rules: ['• 60 secondi totali', '• Vite infinite', '• Corretta = +10 punti', '• Bonus +5s ogni 5 centri'] },
        en: { title: '⚡ Blitz 60s', desc: 'You only have 60 seconds. Answer as fast as possible. Mistakes won\'t stop you, only time!', rules: ['• 60 total seconds', '• Infinite lives', '• Correct = +10 points', '• Bonus +5s every 5 correct'] },
        es: { title: '⚡ Blitz 60s', desc: 'Solo tienes 60 segundos. Responde lo más rápido posible. Los errores no te detienen, ¡solo el tiempo!', rules: ['• 60 segundos', '• Vidas infinitas', '• Correcta = +10 ptos', '• Bono +5s cada 5 correctas'] },
        fr: { title: '⚡ Blitz 60s', desc: 'Vous avez 60 secondes. Répondez aussi vite que possible. Les erreurs ne vous arrêtent pas, seul le temps compte !', rules: ['• 60 secondes totales', '• Vies infinies', '• Correct = +10 pts', '• Bonus +5s chaque 5 corrects'] },
        de: { title: '⚡ Blitz 60s', desc: 'Du hast 60 Sekunden. Antworte so schnell wie möglich. Fehler halten dich nicht auf, nur die Zeit!', rules: ['• 60 Sekunden gesamt', '• Unendlich Leben', '• Richtig = +10 Pkt', '• Bonus +5s jede 5 Richtigen'] },
        pt: { title: '⚡ Blitz 60s', desc: 'Você tem apenas 60 segundos. Responda o mais rápido possível. Os erros não te param, só o tempo!', rules: ['• 60 segundos no total', '• Vidas infinitas', '• Correto = +10 pts', '• Bônus +5s a cada 5 corretas'] },
        available: true
    },
    'higherlower': {
        it: { title: '⚖️ Chi è più vecchio?', desc: 'Modalità a eliminazione diretta. Scegli la persona più anziana tra le due. Sbaglia una sola volta ed è Game Over.', rules: ['• Sfida Sudden Death (1 vita)', '• Scegli chi è più anziano', '• Risposta esatta = +10 punti', '• Un solo errore e sei fuori!'] },
        en: { title: '⚖️ Who is older?', desc: 'Sudden death mode. Choose the older person between the two. Make one mistake and it\'s Game Over.', rules: ['• Sudden Death (1 life)', '• Choose the older person', '• Correct answer = +10 points', '• One mistake = Game Over!'] },
        es: { title: '⚖️ ¿Quién es mayor?', desc: 'Modo muerte súbita. Elige a la persona mayor entre las dos. Un error y estás fuera.', rules: ['• Muerte Súbita (1 vida)', '• Elige a la persona mayor', '• Respuesta correcta = +10 ptos', '• ¡Un error y se acabó!'] },
        fr: { title: '⚖️ Qui est le plus vieux ?', desc: 'Mode mort subite. Choisissez la personne la plus âgée. Une seule erreur et c\'est fini.', rules: ['• Mort Subite (1 vie)', '• Choisissez le plus âgé', '• Bonne réponse = +10 pts', '• Une erreur = Game Over !'] },
        de: { title: '⚖️ Wer ist älter?', desc: 'Sudden-Death-Modus. Wähle die ältere Person von beiden. Ein Fehler und du bist raus.', rules: ['• Sudden Death (1 Leben)', '• Wähle die ältere Person', '• Richtige Antwort = +10 Pkt', '• Ein Fehler = Game Over!'] },
        pt: { title: '⚖️ Quem é mais velho?', desc: 'Modo morte súbita. Escolha a pessoa mais velha. Um erro e o jogo acaba.', rules: ['• Morte Súbita (1 vida)', '• Escolha o mais velho', '• Resposta correta = +10 pts', '• Um erro e acabou!'] },
        available: true
    },
    'versus': {
        it: { title: '🏆 Versus', desc: 'Sfida giocatori da tutto il mondo in tempo reale! Dimostra di avere l\'occhio più clinico. (Prossimamente)', rules: ['• Partite globali in tempo reale', '• Classifica settimanale', '• Il più preciso vince'] },
        en: { title: '🏆 Versus', desc: 'Challenge players worldwide in real-time! Prove you have the sharpest eye. (Coming Soon)', rules: ['• Global real-time matches', '• Weekly leaderboards', '• Most accurate wins'] },
        es: { title: '🏆 Versus', desc: '¡Desafía a jugadores de todo el mundo en tiempo real! Demuestra quién tiene mejor ojo. (Próximamente)', rules: ['• Partidas globales en tiempo real', '• Clasificación semanal', '• El más preciso gana'] },
        fr: { title: '🏆 Versus', desc: 'Défiez des joueurs du monde entier en temps réel ! Prouvez que vous avez l\'œil le plus aiguisé. (Bientôt)', rules: ['• Matchs mondiaux en temps réel', '• Classement hebdomadaire', '• Le plus précis gagne'] },
        de: { title: '🏆 Versus', desc: 'Fordere Spieler weltweit in Echtzeit heraus! Beweise, dass du das schärfste Auge hast. (Demnächst)', rules: ['• Globale Echtzeit-Matches', '• Wöchentliche Bestenlisten', '• Der Genaueste gewinnt'] },
        pt: { title: '🏆 Versus', desc: 'Desafie jogadores de todo o mundo em tempo real! Prove que você tem o olho mais afiado. (Em breve)', rules: ['• Partidas globais em tempo real', '• Tabela de classificação semanal', '• O mais preciso ganha'] },
        available: false
    }
};

const fotoDisponibili = [
    "18_1_IT", "19_1_CN", "20_1_NG", "21_1_MX", "22_1_EG", "23_1_GB", "24_1_JP", "25_1_KE", "26_1_IN", "27_1_BR", 
    "28_1_US", "29_1_JP", "30_1_ET", "31_1_ES", "32_1_IT", "33_1_IR", "34_1_KR", "35_1_GH", "36_1_IN", "37_1_AU", 
    "38_1_PE", "39_1_TH", "40_1_NG", "41_1_CA", "42_1_JO", "43_1_JP", "44_1_ES", "45_1_ET", "46_1_FR", "47_1_IN", 
    "48_1_TH", "50_1_KE", "52_1_DE", "54_1_AR", "56_1_TR", "58_1_VN", "60_1_ZA", "62_1_NO", "64_1_IN", "66_1_CO", 
    "68_1_PL", "70_1_NG", "72_1_JP", "74_1_EG", "76_1_SE", "78_1_MX", "80_1_CG", "82_1_NL", "85_1_IN", "90_1_CH", 
    "18_2_SE", "19_2_TH", "20_2_IT", "21_2_ET", "22_2_KR", "23_2_MX", "24_2_GR", "25_2_EG", "26_2_DE", "27_2_VN", 
    "28_2_NG", "29_2_FR", "30_2_TR", "31_2_RU", "32_2_BR", "33_2_CN", "34_2_SA", "35_2_IE", "36_2_DO", "37_2_PH", 
    "38_2_ES", "39_2_MA", "41_2_NL", "43_2_KE", "45_2_PT", "47_2_IR", "49_1_US", "51_1_JP", "53_1_ZA", "55_1_GB", 
    "57_1_CU", "59_1_KR", "61_1_AU", "63_1_PE", "65_1_SE", "67_1_PK", "69_1_IT", "71_1_GH", "73_1_CN", "75_1_MX", 
    "77_1_PL", "79_1_IN", "81_1_FR", "83_1_LB", "84_1_US", "86_1_JP", "87_1_ML", "88_1_MX", "89_1_IT", "90_2_GB"
];

let gameState = {
    selectedMode: 'scalata',
    lives: 5,
    maxLives: 20,
    score: 0,
    currentCorrectAge: 0, 
    consecutiveCorrect: 0,
    isTransitioning: false,
    timeLeft: 60,
    timerId: null,
    currentLang: 'it',
    hlPhotos: []
};

/* --- INIZIALIZZAZIONE COOKIE --- */
document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("cookiesAccepted") !== "true") {
        document.getElementById("cookie-banner").classList.remove("hidden");
    }
});

function acceptCookies(acceptAll) {
    localStorage.setItem("cookiesAccepted", "true");
    
    if(acceptAll) {
        // Qui andrà il log per attivare gli ads tracciati
        console.log("Cookies Tutti Accettati");
    } else {
        // Qui andrà il log per gli ads NON personalizzati
        console.log("Cookies Solo Essenziali Accettati");
    }
    
    document.getElementById("cookie-banner").classList.add("hidden");
}

/* --- GESTIONE LINGUA --- */
function setLanguage(lang) {
    gameState.currentLang = lang;
    const t = translations[lang];

    document.getElementById('t-home-top').innerText = t.tHomeTop;
    document.getElementById('t-home-mid').innerText = t.tHomeMid;
    document.getElementById('t-btn-play').innerText = t.tBtnPlay;
    document.getElementById('t-home-bot').innerText = t.tHomeBot;
    document.getElementById('t-disc-top').innerText = t.tDiscTop;
    document.getElementById('t-disc-title1').innerText = t.tDiscTitle1;
    document.getElementById('t-disc-p1').innerHTML = t.tDiscP1;
    document.getElementById('t-disc-p2').innerHTML = t.tDiscP2;
    document.getElementById('t-disc-p3').innerHTML = t.tDiscP3;
    document.getElementById('t-btn-pros').innerText = t.tBtnPros;
    document.getElementById('t-disc-bot').innerText = t.tDiscBot;
    document.getElementById('t-back-lang').innerText = t.tBackLang;
    document.getElementById('t-back').innerText = t.tBack;
    document.getElementById('t-mode-title').innerText = t.tModeTitle;
    document.getElementById('t-mode-sub').innerText = t.tModeSub;
    document.getElementById('name-scalata').innerText = t.nameScalata;
    document.getElementById('name-blitz').innerText = t.nameBlitz;
    document.getElementById('name-hl').innerText = t.nameHL;
    document.getElementById('name-versus').innerText = t.nameVersus;
    document.getElementById('badge-disp1').innerText = t.badgeDisp1;
    document.getElementById('badge-disp2').innerText = t.badgeDisp2;
    document.getElementById('badge-disp3').innerText = t.badgeDisp3;
    document.getElementById('badge-soon').innerText = t.badgeSoon;
    document.getElementById('t-time').innerText = t.tTime;
    document.getElementById('t-score').innerText = t.tScore;
    document.getElementById('btn-share-main').innerText = t.btnShareMain;
    document.getElementById('btn-replay-main').innerText = t.btnReplayMain;
    document.getElementById('btn-menu-main').innerText = t.btnMenuMain;
    document.getElementById('t-update-msg').innerText = t.tUpdateMsg;
    
    document.getElementById('btn-contact-main').innerText = t.btnContactMain;
    document.getElementById('t-contact-title').innerText = t.contactTitle;
    document.getElementById('t-contact-send').innerText = t.contactSend;
    document.getElementById('t-contact-close').innerText = t.contactClose;
    document.getElementById('contact-msg-input').placeholder = t.contactPlaceholder;
    document.getElementById('contact-name-input').placeholder = t.contactNamePlaceholder;
    document.getElementById('t-btn-exit').innerText = t.btnExit;
    
    document.getElementById('t-revive-title').innerText = t.reviveTitle;
    document.getElementById('t-btn-watch-ad').innerText = t.btnWatchAd;
    document.getElementById('t-btn-decline-ad').innerText = t.btnDeclineAd;
    
    document.getElementById('t-cookie-msg').innerText = t.cookieMsg;
    document.getElementById('btn-cookie-accept').innerText = t.cookieAcceptAll;
    document.getElementById('btn-cookie-essential').innerText = t.cookieEssential;

    document.getElementById('screen-language').classList.add('hidden');
    document.getElementById('screen-home').classList.remove('hidden');

    selectMode(document.querySelector('.mode-card.active') || document.querySelectorAll('.mode-card')[0], gameState.selectedMode);
}

function showLanguageScreen() {
    document.getElementById('screen-home').classList.add('hidden');
    document.getElementById('screen-language').classList.remove('hidden');
}

/* --- NAVIGAZIONE --- */
function showDisclaimer() {
    document.getElementById('screen-home').classList.add('hidden');
    document.getElementById('screen-disclaimer').classList.remove('hidden');
}

function showModesScreen() {
    document.getElementById('screen-home').classList.add('hidden');
    document.getElementById('screen-disclaimer').classList.add('hidden');
    document.getElementById('screen-modes').classList.remove('hidden');
    document.getElementById('screen-modes').scrollTop = 0;
}

function showHomeScreen() {
    document.getElementById('screen-modes').classList.add('hidden');
    document.getElementById('screen-disclaimer').classList.add('hidden');
    document.getElementById('screen-home').classList.remove('hidden');
}

function selectMode(element, mode) {
    gameState.selectedMode = mode;
    const cards = document.querySelectorAll('.mode-card');
    cards.forEach(card => {
        card.classList.remove('active');
        card.querySelector('.dot').classList.remove('active');
    });
    element.classList.add('active');
    element.querySelector('.dot').classList.add('active');

    const data = modeData[mode][gameState.currentLang];
    const isAvailable = modeData[mode].available;
    const titleEl = document.getElementById('detail-title');
    
    titleEl.innerText = data.title;
    document.getElementById('detail-description').innerText = data.desc;
    if (mode === 'versus') {
        titleEl.className = 'color-versus';
    } else {
        titleEl.className = 'color-normal';
    }
    
    const listElement = document.getElementById('detail-list');
    listElement.innerHTML = '';
    data.rules.forEach(rule => {
        const li = document.createElement('li');
        li.innerText = rule;
        listElement.appendChild(li);
    });

    const btnStart = document.getElementById('btn-start-main');
    if(isAvailable) {
        btnStart.classList.remove('disabled');
        btnStart.onclick = startGame;
        btnStart.innerText = translations[gameState.currentLang].btnStartMain;
    } else {
        btnStart.classList.add('disabled');
        btnStart.onclick = null;
        btnStart.innerText = translations[gameState.currentLang].btnSoon;
    }
}

function confirmExitGame() {
    clearInterval(gameState.timerId);
    document.getElementById('screen-game').classList.add('hidden');
    document.getElementById('screen-modes').classList.remove('hidden');
}

function startGame() {
    document.getElementById('screen-modes').classList.add('hidden');
    document.getElementById('screen-game-over').classList.add('hidden');
    document.getElementById('screen-game').classList.remove('hidden');
    document.getElementById('screen-game').scrollTop = 0;
    
    gameState.score = 0;
    gameState.consecutiveCorrect = 0;
    gameState.isTransitioning = false;
    clearInterval(gameState.timerId);
    
    const t = translations[gameState.currentLang];

    if (gameState.selectedMode === 'scalata') {
        gameState.lives = 5;
        document.getElementById('lives').classList.remove('hidden');
        document.getElementById('timer-box').classList.add('hidden');
        document.getElementById('game-hint').innerText = t.hintScalata;
        document.getElementById('standard-game-ui').classList.remove('hidden');
        document.getElementById('hl-game-ui').classList.add('hidden');
    } else if (gameState.selectedMode === 'blitz') {
        gameState.timeLeft = 60;
        document.getElementById('lives').classList.add('hidden');
        document.getElementById('timer-box').classList.remove('hidden');
        document.getElementById('game-hint').innerText = t.hintBlitz;
        document.getElementById('standard-game-ui').classList.remove('hidden');
        document.getElementById('hl-game-ui').classList.add('hidden');
        startTimer();
    } else if (gameState.selectedMode === 'higherlower') {
        gameState.lives = 1;
        document.getElementById('lives').classList.add('hidden');
        document.getElementById('timer-box').classList.add('hidden');
        document.getElementById('game-hint').innerText = t.hintHL;
        document.getElementById('standard-game-ui').classList.add('hidden');
        document.getElementById('hl-game-ui').classList.remove('hidden');
    }

    updateGameUI();
    nextRound();
}

function startTimer() {
    const timerVal = document.getElementById('timer-value');
    const timerBox = document.getElementById('timer-box');
    timerBox.classList.remove('timer-danger');
    timerVal.innerText = gameState.timeLeft;
    
    gameState.timerId = setInterval(() => {
        gameState.timeLeft--;
        timerVal.innerText = gameState.timeLeft;
        
        if (gameState.timeLeft <= 10 && gameState.timeLeft > 0) {
            timerBox.classList.add('timer-danger');
        } else {
            timerBox.classList.remove('timer-danger');
        }

        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timerId);
            showGameOver(); 
        }
    }, 1000);
}

function updateGameUI() {
    const scoreEl = document.getElementById('score-value');
    scoreEl.innerText = gameState.score;
    
    if (gameState.selectedMode === 'scalata') {
        const livesContainer = document.getElementById('lives');
        livesContainer.innerHTML = '';
        for (let i = 1; i <= gameState.maxLives; i++) {
            const heart = document.createElement('span');
            heart.innerText = '❤';
            if (i <= gameState.lives) {
                heart.className = 'heart-red';
            } else {
                heart.className = 'heart-gray';
            }
            livesContainer.appendChild(heart);
        }
    } else if (gameState.selectedMode === 'blitz') {
        document.getElementById('timer-value').innerText = gameState.timeLeft;
    }
}

/* --- LOGICA DI GIOCO --- */
function nextRound() {
    gameState.isTransitioning = false;
    
    if (gameState.selectedMode === 'higherlower') {
        document.getElementById('hl-card-0').style.borderColor = "";
        document.getElementById('hl-card-1').style.borderColor = "";

        let foto1, foto2, age1, age2, ageGap;
        let minGap = gameState.score >= 100 ? 1 : 10; 

        do {
            foto1 = fotoDisponibili[Math.floor(Math.random() * fotoDisponibili.length)];
            foto2 = fotoDisponibili[Math.floor(Math.random() * fotoDisponibili.length)];
            age1 = parseInt(foto1.split('_')[0]);
            age2 = parseInt(foto2.split('_')[0]);
            ageGap = Math.abs(age1 - age2);
        } while (foto1 === foto2 || age1 === age2 || ageGap < minGap);

        gameState.hlPhotos = [
            { string: foto1, age: age1, iso: foto1.split('_')[2].toLowerCase() },
            { string: foto2, age: age2, iso: foto2.split('_')[2].toLowerCase() }
        ];

        document.getElementById('hl-photo-0').innerHTML = `
            <img src="${foto1}.jpg" style="width:100%; height:100%; object-fit:cover; border-radius:4px;">
            <img class="flag-icon" src="https://flagcdn.com/w80/${gameState.hlPhotos[0].iso}.png" alt="Country Flag">
        `;
        document.getElementById('hl-photo-1').innerHTML = `
            <img src="${foto2}.jpg" style="width:100%; height:100%; object-fit:cover; border-radius:4px;">
            <img class="flag-icon" src="https://flagcdn.com/w80/${gameState.hlPhotos[1].iso}.png" alt="Country Flag">
        `;
    } else {
        const buttons = document.querySelectorAll('.btn-answer');
        buttons.forEach(btn => {
            btn.style.backgroundColor = "";
            btn.style.borderColor = "";
            btn.style.color = "";
        });

        const fotoScelta = fotoDisponibili[Math.floor(Math.random() * fotoDisponibili.length)];
        const photoParts = fotoScelta.split('_'); 
        
        gameState.currentCorrectAge = parseInt(photoParts[0]);
        const isoCode = photoParts[2].toLowerCase();

        const photoContainer = document.getElementById('photo-container');
        photoContainer.innerHTML = `
            <img src="${fotoScelta}.jpg" style="width:100%; height:100%; object-fit:cover; border-radius:4px;">
            <img class="flag-icon" src="https://flagcdn.com/w80/${isoCode}.png" alt="Country Flag">
        `;
        generateAnswers(gameState.currentCorrectAge);
    }
}

function generateAnswers(correctAge) {
    let answers = [correctAge];
    while(answers.length < 3) {
        let range = correctAge < 30 ? 15 : 25;
        let fakeAge = correctAge + (Math.floor(Math.random() * range) + 5) * (Math.random() > 0.5 ? 1 : -1);
        
        if(fakeAge >= 18 && fakeAge <= 95 && !answers.includes(fakeAge)) {
            if(!answers.some(a => Math.abs(a - fakeAge) < 3)) answers.push(fakeAge);
        }
    }
    
    answers.sort(() => Math.random() - 0.5);
    
    const buttons = document.querySelectorAll('.btn-answer');
    buttons.forEach((btn, index) => {
        btn.innerText = answers[index];
        btn.onclick = () => checkAnswer(btn, answers[index]);
    });
}

function checkAnswer(btn, selectedAge) {
    if(gameState.isTransitioning) return;
    gameState.isTransitioning = true;

    const isCorrect = (selectedAge === gameState.currentCorrectAge);
    
    if(isCorrect) {
        btn.style.backgroundColor = "#bdfd1a";
        btn.style.borderColor = "#bdfd1a";
        btn.style.color = "#000";
        gameState.score += 10;
        gameState.consecutiveCorrect++;

        if(gameState.selectedMode === 'scalata' && gameState.consecutiveCorrect % 10 === 0) {
            gameState.lives = Math.min(gameState.maxLives, gameState.lives + 5);
        } else if (gameState.selectedMode === 'blitz' && gameState.consecutiveCorrect % 5 === 0) {
            gameState.timeLeft += 5;
        }
    } else {
        btn.style.backgroundColor = "#ff4b4b";
        btn.style.borderColor = "#ff4b4b";
        btn.style.color = "#fff";
        gameState.consecutiveCorrect = 0;

        document.querySelectorAll('.btn-answer').forEach(b => {
            if(parseInt(b.innerText) === gameState.currentCorrectAge) {
                b.style.borderColor = "#bdfd1a";
                b.style.color = "#bdfd1a";
            }
        });

        if(gameState.selectedMode === 'scalata') {
            gameState.lives--;
        }
    }

    updateGameUI();

    setTimeout(() => {
        if(gameState.selectedMode === 'scalata' && gameState.lives <= 0) {
            handleDeath();
        } else {
            nextRound();
        }
    }, 1000);
}

function checkAnswerHL(selectedIndex) {
    if(gameState.isTransitioning) return;
    gameState.isTransitioning = true;

    const age0 = gameState.hlPhotos[0].age;
    const age1 = gameState.hlPhotos[1].age;
    const isCorrect = (selectedIndex === 0 && age0 > age1) || (selectedIndex === 1 && age1 > age0);
    
    const card0 = document.getElementById('hl-card-0');
    const card1 = document.getElementById('hl-card-1');

    if (isCorrect) {
        if(selectedIndex === 0) card0.style.borderColor = "#bdfd1a";
        else card1.style.borderColor = "#bdfd1a";
        
        gameState.score += 10;
        updateGameUI();
        
        setTimeout(() => {
            nextRound();
        }, 1000);
    } else {
        if(selectedIndex === 0) {
            card0.style.borderColor = "#ff4b4b";
            card1.style.borderColor = "#bdfd1a";
        } else {
            card1.style.borderColor = "#ff4b4b";
            card0.style.borderColor = "#bdfd1a";
        }
        
        updateGameUI();
        setTimeout(() => {
            handleDeath();
        }, 1200);
    }
}

/* --- LOGICA PUBBLICITA' E GAME OVER --- */
function handleDeath() {
    if(gameState.selectedMode === 'scalata' || gameState.selectedMode === 'higherlower') {
        const t = translations[gameState.currentLang];
        document.getElementById('t-revive-msg').innerText = gameState.selectedMode === 'scalata' ? t.reviveMsgScalata : t.reviveMsgHL;
        document.getElementById('revive-modal').classList.remove('hidden');
    } else {
        showGameOver();
    }
}

function watchAdToRevive() {
    const btn = document.getElementById('t-btn-watch-ad');
    const loadingBar = document.getElementById('ad-loading-bar');
    const progressBar = document.getElementById('ad-progress');
    
    btn.classList.add('hidden');
    loadingBar.classList.remove('hidden');
    
    setTimeout(() => {
        progressBar.style.transition = "width 3s linear"; 
        progressBar.style.width = "100%";
    }, 50);

    setTimeout(() => {
        if(gameState.selectedMode === 'scalata') gameState.lives = 5;
        if(gameState.selectedMode === 'higherlower') gameState.lives = 1;
        
        document.getElementById('revive-modal').classList.add('hidden');
        btn.classList.remove('hidden');
        loadingBar.classList.add('hidden');
        progressBar.style.transition = "none";
        progressBar.style.width = "0%";
        
        if(gameState.selectedMode === 'higherlower') {
            document.getElementById('hl-card-0').style.borderColor = "";
            document.getElementById('hl-card-1').style.borderColor = "";
        }
        
        updateGameUI();
        nextRound();
    }, 3050); 
}

function declineReviveAndDie() {
    document.getElementById('revive-modal').classList.add('hidden');
    showGameOver();
}

function showGameOver() {
    clearInterval(gameState.timerId);
    document.getElementById('screen-game').classList.add('hidden');
    document.getElementById('screen-game-over').classList.remove('hidden');
    document.getElementById('screen-game-over').scrollTop = 0;
    document.getElementById('over-score').innerText = gameState.score;

    const t = translations[gameState.currentLang];
    const msgs = t.gameOverMessages;
    
    let title, emoji, msg;

    if(gameState.score < 40) {
        title = msgs.lowTitle;
        emoji = msgs.lowEmoji; msg = msgs.lowMsg;
    } else if(gameState.score < 120) {
        title = msgs.midTitle;
        emoji = msgs.midEmoji; msg = msgs.midMsg;
    } else {
        title = msgs.highTitle;
        emoji = msgs.highEmoji; msg = msgs.highMsg;
    }

    document.getElementById('over-title').innerText = title;
    document.getElementById('over-emoji').innerText = emoji;
    document.getElementById('over-msg').innerText = msg;
}

function backToModes() {
    document.getElementById('screen-game-over').classList.add('hidden');
    document.getElementById('screen-modes').classList.remove('hidden');
}

function shareResult() {
    const t = translations[gameState.currentLang];
    const modeName = modeData[gameState.selectedMode][gameState.currentLang].title;
    const text = t.shareText.replace('{score}', gameState.score).replace('{mode}', modeName) + window.location.href;
    
    if (navigator.share) {
        navigator.share({
            title: 'Guess The Age - Pro',
            text: text
        }).catch(console.error);
    } else {
        navigator.clipboard.writeText(text);
        alert("Text copied to clipboard!");
    }
}

/* --- SISTEMI DI SICUREZZA LATO CLIENT --- */
document.addEventListener('contextmenu', function(e) { e.preventDefault(); }, false);
document.onkeydown = function(e) {
    if (e.keyCode == 123) return false;
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false;
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) return false;
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) return false;
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false;
};

/* --- FORM CONTATTI --- */
function openContactForm() {
    document.getElementById('contact-modal').classList.remove('hidden');
}

function closeContactForm() {
    document.getElementById('contact-modal').classList.add('hidden');
}
