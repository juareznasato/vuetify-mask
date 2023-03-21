import { render, fireEvent } from "@testing-library/vue";
import Decimal from "../Decimal.vue";
import Vue from "vue";
import Vuetify from "vuetify";
const vuetify = new Vuetify();

describe("Decimal.vue", () => {
  function renderComponent({ value = "0", options = {} } = {}) {
    const MockComponent = Vue.component("MockComponent", {
      components: { Decimal },
      props: {
        label: String,
        options: Object
      },
      data() {
        return {
          value
        };
      },
      template: `
      <Decimal
        v-model="value"
        :label="label"
        :options="options"
        @input="$emit('input', $event)"
      />
    `
    });

    return render(MockComponent, {
      props: {
        label: "Decimal",
        options: { locale: "pt-BR", precision: 2, ...options }
      },
      vuetify
    });
  }

  function findInput(component) {
    return component.getByLabelText("Decimal");
  }

  const positiveInputValue = "123.456.789,00";
  const positiveEmittedValue = "123456789.00";
  const negativeInputValue = "-123.456.789,00";
  const negativeEmittedValue = "-123456789.00";

  it("renders default state", () => {
    const component = renderComponent();

    expect(findInput(component).value).toBe("0,00");
  });

  it("renders with initial value formatted", () => {
    const component = renderComponent({ value: 123456789 });

    expect(findInput(component).value).toBe(positiveInputValue);
  });

  describe("when input is changed", () => {
    it("emits input event and renders new value", async () => {
      const component = renderComponent();
      const input = findInput(component);

      await fireEvent.update(input, positiveInputValue);

      expect(findInput(component).value).toBe(positiveInputValue);
      expect(component.emitted().input).toEqual([[positiveEmittedValue]]);
    });

    describe("when type negative value", () => {
      it("emits input event and renders new value without negative", async () => {
        const component = renderComponent();
        const input = findInput(component);

        await fireEvent.update(input, negativeInputValue);

        expect(findInput(component).value).toBe(positiveInputValue);
        expect(component.emitted().input).toEqual([[positiveEmittedValue]]);
      });

      describe("when type negative symbol after clean input", () => {
        it("emits input event and renders new value", async () => {
          const component = renderComponent({
            options: { allowNegative: true }
          });
          const input = findInput(component);
          await fireEvent.update(input, null);

          await fireEvent.keyPress(input, { keyCode: 45 });

          expect(findInput(component).value).toBe("-0,00");
          expect(component.emitted().input).toEqual([[undefined], ["-0.00"]]);
        });
      });

      describe("when allowNegative is true", () => {
        it("emits input event and renders new value", async () => {
          const component = renderComponent({
            options: { allowNegative: true }
          });
          const input = findInput(component);
          await fireEvent.update(input, negativeInputValue);

          expect(findInput(component).value).toBe(negativeInputValue);
          expect(component.emitted().input).toEqual([[negativeEmittedValue]]);
        });

        describe("when type negative symbol with current value", () => {
          it("emits input event and renders new value", async () => {
            const component = renderComponent({
              value: "123456789",
              options: { allowNegative: true }
            });
            const input = findInput(component);
            expect(findInput(component).value).toBe(positiveInputValue);

            await fireEvent.keyPress(input, { keyCode: 45 });

            expect(findInput(component).value).toBe(negativeInputValue);
            expect(component.emitted().input).toEqual([[negativeEmittedValue]]);
          });
        });
      });
    });
  });
});
