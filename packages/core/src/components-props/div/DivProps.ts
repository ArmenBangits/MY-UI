import {
  AdditionalComponentProps,
  BackgroundConfigurableComponent,
  BorderConfigurableComponent,
  ColorConfigurableComponent,
  DisplayConfigurableComponent,
  DynamicComponent,
  FontConfigurableComponent,
  OverflowConfigurableComponentProps,
  PositionConfigurableComponent,
  RadiusConfigurableComponent,
  ShadowConfigurableComponent,
  SizeConfigurableComponent,
  SpacingConfigurableComponent,
  TextConfigurableComponent,
  TransitionConfigurableComponent,
} from '../interfaces';

export default interface DivProps
  extends AdditionalComponentProps,
    BackgroundConfigurableComponent,
    BorderConfigurableComponent,
    DisplayConfigurableComponent,
    DynamicComponent,
    FontConfigurableComponent,
    OverflowConfigurableComponentProps,
    PositionConfigurableComponent,
    RadiusConfigurableComponent,
    ShadowConfigurableComponent,
    SizeConfigurableComponent,
    SpacingConfigurableComponent,
    TextConfigurableComponent,
    TransitionConfigurableComponent,
    ColorConfigurableComponent {}