import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";
// biome-ignore lint/style/useImportType: <explanation>
import { Router, RouterOutlet } from "@angular/router";

@Component({
	selector: "app-modal",
	standalone: true,
	imports: [RouterOutlet, CommonModule],
	templateUrl: "./modal.component.html",
	styleUrl: "./modal.component.css",
})
export class ModalComponent {
	@Output() modalClosed: EventEmitter<boolean> = new EventEmitter<boolean>();
	isVisible = true;

	constructor(private router: Router) {}

	closeModal() {
		this.isVisible = false;
		this.modalClosed.emit(false);
	}

	limparPreferencias() {
		// window.localStorage.setItem("userPreferences", "");
		this.closeModal;
		this.router.navigateByUrl("/");
	}
}
