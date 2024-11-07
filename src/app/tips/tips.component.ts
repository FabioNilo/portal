import { Component } from '@angular/core';
import { AlertsComponent } from '../alerts/alerts.component';

@Component({
  selector: 'app-tips',
  standalone: true,
  imports: [AlertsComponent],
  templateUrl: './tips.component.html',
  styleUrl: './tips.component.css'
})
export class TipsComponent {
  safetyTips = [
    {
      title: 'Prevenção de Roubos de Celulares em Festas',
      tips: [
        'Evite usar o celular em locais muito movimentados ou inseguros.',
        'Prefira guardar o celular em bolsos internos ou bolsas com zíper.',
        'Ative rastreamento do celular por aplicativos de segurança.',
        'Cuidado ao tirar fotos ou vídeos em público, fique atento ao ambiente.'
      ]
    },
    {
      title: 'Prevenção de Roubos de Carros',
      tips: [
        'Estacione em locais iluminados e movimentados.',
        'Nunca deixe objetos de valor à vista dentro do carro.',
        'Use alarmes e travas de segurança adicionais.',
        'Ao se aproximar do carro, verifique o ambiente ao redor.'
      ]
    },
    {
      title: 'Prevenção de Arrombamentos de Carros',
      tips: [
        'Certifique-se de que todas as portas e janelas estão fechadas ao deixar o carro.',
        'Não deixe documentos importantes no veículo.',
        'Instale um sistema de alarme visível para inibir arrombamentos.',
        'Prefira estacionar em locais vigiados por câmeras de segurança.'
      ]
    },
    {
      title: 'Prevenção de Roubos de Motocicletas',
      tips: [
        'Use travas de segurança reforçadas quando estacionar.',
        'Evite estacionar em locais pouco movimentados ou mal iluminados.',
        'Utilize rastreadores eletrônicos para facilitar a recuperação em caso de furto.',
        'Sempre trave a direção da motocicleta ao estacionar.'
      ]
    }
  ];

  currentTip: { title: string, tip: string } | null = null;
  intervalId?:  ReturnType<typeof setInterval>

  ngOnInit(): void {
    this.displayRandomTip(); // Mostra a primeira dica assim que o componente é carregado
    this.intervalId = setInterval(() => this.displayRandomTip(), 5000); // Atualiza a dica a cada 5 segundos
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Limpa o intervalo quando o componente é destruído
    }
  }

  // Função para exibir uma dica aleatória
  displayRandomTip(): void {
    const randomCategoryIndex = Math.floor(Math.random() * this.safetyTips.length);
    const randomCategory = this.safetyTips[randomCategoryIndex];
    const randomTipIndex = Math.floor(Math.random() * randomCategory.tips.length);
    
    this.currentTip = {
      title: randomCategory.title,
      tip: randomCategory.tips[randomTipIndex]
    };
  }
}
