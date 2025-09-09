
import { Component, Prop, State, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'stencil-form-input',
  styleUrl: 'stencil-form-input.css',
  shadow: true,
})
export class StencilFormInput {
  
  @Prop() type: 'text' | 'email' | 'password' = 'text';

  @Prop({ mutable: true, reflect: true }) value: string = '';
  
  @Prop() placeholder: string = '';
  
  @Prop() validationRegex?: string;
  
  @Prop() accessityLabel?: string;

  @Prop() required: boolean = false;
  
  @Prop() disabled: boolean = false;
  
  @State() isValid: boolean = true;
  
  @Event() inputChange: EventEmitter<string>;
 
  @Event() validityChange: EventEmitter<boolean>;

  
  private onInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.value = target.value;

   
    if (this.type === 'email') {
      
      const regex = this.validationRegex 
        ? new RegExp(this.validationRegex) 
        : /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.isValid = regex.test(this.value);
    } 
    else if (this.type === 'password') {
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
  this.isValid = passwordRegex.test(this.value);
}

    else if (this.validationRegex) {
     
      const regex = new RegExp(this.validationRegex);
      this.isValid = regex.test(this.value);
    } 
    else if (this.required) {
      
      this.isValid = this.value.trim().length > 0;
    }

 
    this.validityChange.emit(this.isValid);
    this.inputChange.emit(this.value);
  };

  render() {
    return (
      <div class="input-wrapper">
        
        <label>
          <slot name="label"></slot>

          <input
            part="input"
            type={this.type}
            value={this.value}
            placeholder={this.placeholder}
            aria-label={this.accessityLabel}
            aria-invalid={!this.isValid ? 'true' : 'false'}
            required={this.required}
            disabled={this.disabled}
            onInput={this.onInput}
          />
        </label>

        
        {!this.isValid && this.type === 'email' && (
          <span role="alert" class="error">Invalid email format</span>
        )}
        {!this.isValid && this.type === 'password' && (
          <span role="alert" class="error">Password must be at least 8 characters, include 1 uppercase letter, 1 number and 1 special character</span>
        )}
        {!this.isValid && !['email','password'].includes(this.type) && (
          <span role="alert" class="error">Invalid input</span>
        )}
      </div>
    );
  }
}

