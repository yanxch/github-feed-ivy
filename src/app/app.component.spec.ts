import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('AppComponent', () => {

  test('should create the app', async () => {
    // When
    const { getByText } = await render(AppComponent, 
      {
        imports: [
          AppModule
        ]
      });
    // Then
    expect(getByText('Github Commits'));
  });

});
