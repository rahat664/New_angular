import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'data-binding';
  serverElements = [{type: 'server', name:'Testserver', content: 'just a test'}]
  onServerAdded(serverData:{serverName: string, serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }
  onBlueprintAdded(serverData:{serverName:string, serverContent:string}) {
    this.serverElements.push({
      type:'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }
}
