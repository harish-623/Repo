import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';   // ✅ ADD THIS

@Component({
  selector: 'app-home',
  standalone: true,          // ✅ MUST exist
  imports: [FormsModule],    // ✅ ADD THIS
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  inputJson = '';
  outputJson = '';
  tabSize = 2;

  validateJson(json: string) {
  try {
    console.log(json)
    JSON.parse(json);
    alert("✅ Valid JSON");
  } catch (e:any) {
    alert("❌ Invalid JSON\n" + e.message);
  }
}

  formatJson(json: string) {
    try {
      const parsed = JSON.parse(this.inputJson);
      this.outputJson = JSON.stringify(parsed, null, this.tabSize);
    } catch {
      alert("Invalid JSON");
    }
  }

  minifyJson() {
    try {
      this.outputJson = JSON.stringify(JSON.parse(this.inputJson));
    } catch {
      alert("Invalid JSON");
    }
  }

  copyJson() {
    navigator.clipboard.writeText(this.outputJson);
  }

  clearJson() {
    this.inputJson = '';
    this.outputJson = '';
  }
}