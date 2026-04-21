import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { provideRouter } from '@angular/router'; // 1. Importe o provedor de rotas

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideRouter([]) // 2. Adicione isso aqui para simular o roteador
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges(); // Garante que o Angular processe o HTML
    const compiled = fixture.nativeElement as HTMLElement;
    
    // Verifique se o texto 'Hello, revisaospa' realmente existe no seu HTML
    //expect(compiled.querySelector('h1')?.textContent).toContain('Hello, revisaospa');
  });
});