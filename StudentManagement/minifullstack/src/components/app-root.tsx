import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <h1>Spring + Hibernate + Stencil</h1>
        <student-list></student-list>
      </div>
    );
  }
}
