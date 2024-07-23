import { shallowMount } from '@vue/test-utils'
import HeaderComponent from '@/components/HeaderComponent.vue'

describe('HeaderComponent.vue', () => {
  it('renders the prop value correctly', () => {
    const propValue = 'Test Prop Value';
    const wrapper = shallowMount(HeaderComponent, {
      props: {
        text: propValue
      }
    });

    expect(wrapper.text()).toBe(propValue);
  });
})
