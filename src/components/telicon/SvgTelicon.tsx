import * as React from 'react';
import Svg, { SvgProps, Symbol, Path, Ellipse, Circle } from 'react-native-svg';

type Props = SvgProps & {
  fillSecondary: string;
  children: React.ReactNode;
};

function SvgTelicon300 ({ children, ...props }: Props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" {...props}>
      <Symbol id="telicon-3_0_0_svg__account-tree" viewBox="0 0 16 16">
        <Path d="M0 1h8v3H0zm8 9V8H5V6H3v9h5v-2H5v-3zm2-2h6v3h-6zm0 5h6v3h-6z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__address-book" viewBox="0 0 16 16">
        <Path d="M15 5V3h-1V0H2v16h12v-3h1v-2h-1V9h1V7h-1V5h1zM8 4c.9 0 1.8.8 1.8 1.8S8.9 7.5 8 7.5s-1.8-.8-1.8-1.7S7.1 4 8 4zm0 8c-1.8 0-3.5-.1-3.5-1.5 0-2.1.8-2.7 1.3-3 .5.6 1.3 1 2.2 1s1.8-.5 2.2-1c.5.2 1.3.8 1.3 3 0 1.4-1.7 1.5-3.5 1.5z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__apps" viewBox="0 0 16 16">
        <Path d="M6 12h4v4H6zm-6 0h4v4H0zm12 0h4v4h-4zM6 6h4v4H6zM0 6h4v4H0zm12 0h4v4h-4zM6 0h4v4H6zM0 0h4v4H0zm12 0h4v4h-4z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__arrow-down--circle-o" viewBox="0 0 16 16">
        <Path d="M10.8 7.3L9 9.2V4H7v5.2L5.2 7.3 3.8 8.8l2.8 2.8L8 13l1.4-1.4 2.8-2.8z" />
        <Path d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM8 2c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__arrow-down--circle" viewBox="0 0 16 16">
        <Path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1.4 11.6L8 13l-1.4-1.4-2.8-2.8 1.4-1.4L7 9.2V3h2v6.2l1.8-1.8 1.4 1.4-2.8 2.8z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__arrow-down" viewBox="0 0 16 16">
        <Path d="M9.4 11.6L8 13l-1.4-1.4-2.8-2.8 1.4-1.5L7 9.2V3h2v6.2l1.8-1.9 1.4 1.5z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__arrow-from-bottom" viewBox="0 0 16 16">
        <Path d="M14 13H2v2h12v-2z" />
        <Path d="M10.8 6.7l1.4-1.5L8 1 3.8 5.2l1.4 1.5L7 4.8V11h2V4.8l1.8 1.9z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__arrow-from-left" viewBox="0 0 16 16">
        <Path d="M3 14V2H1v12h2z" />
        <Path d="M9.3 10.8l1.5 1.4L15 8l-4.2-4.2-1.5 1.4L11.2 7H5v2h6.2l-1.9 1.8z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__arrow-from-right" viewBox="0 0 16 16">
        <Path d="M15 14V2h-2v12h2z" />
        <Path d="M4.8 9H11V7H4.8l1.9-1.8-1.5-1.4L1 8l4.2 4.2 1.5-1.4L4.8 9z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__arrow-from-top" viewBox="0 0 16 16">
        <Path d="M14 1H2v2h12V1z" />
        <Path d="M9 11.2V5H7v6.2L5.2 9.3l-1.4 1.5L8 15l4.2-4.2-1.4-1.5L9 11.2z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__arrow-left--circle-o" viewBox="0 0 16 16">
        <Path d="M8.7 10.8L6.8 9H12V7H6.8l1.9-1.8-1.5-1.4-2.8 2.8L3 8l1.4 1.4 2.8 2.8z" />
        <Path d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM8 2c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__arrow-left--circle" viewBox="0 0 16 16">
        <Path d="M16 8c0-4.4-3.6-8-8-8S0 3.6 0 8s3.6 8 8 8 8-3.6 8-8zM4.4 9.4L3 8l1.4-1.4 2.8-2.8 1.4 1.4L6.8 7H13v2H6.8l1.8 1.8-1.4 1.4-2.8-2.8z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__arrow-left" viewBox="0 0 16 16">
        <Path d="M4.4 9.4L3 8l1.4-1.4 2.8-2.8 1.5 1.4L6.8 7H13v2H6.8l1.9 1.8-1.5 1.4z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__arrow-right--circle-o" viewBox="0 0 16 16">
        <Path d="M7.3 10.8L9.2 9H4V7h5.2L7.3 5.2l1.5-1.4 2.8 2.8L13 8l-1.4 1.4-2.8 2.8z" />
        <Path d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM8 2c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__arrow-right--circle" viewBox="0 0 16 16">
        <Path d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zm.8-3.8l-1.4-1.4L9.2 9H3V7h6.2L7.3 5.2l1.4-1.4 2.8 2.8L13 8l-1.4 1.4-2.8 2.8z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__arrow-right" viewBox="0 0 16 16">
        <Path d="M8.8 12.2l-1.5-1.4L9.2 9H3V7h6.2L7.3 5.2l1.5-1.4 2.8 2.8L13 8l-1.4 1.4z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__arrow-target-down" viewBox="0 0 16 16">
        <Path d="M14 13H2v2h12v-2z" />
        <Path d="M9 8.2V1H7v7.2L5.2 6.3 3.8 7.8 8 12l4.2-4.2-1.4-1.5L9 8.2z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__arrow-target-left" viewBox="0 0 16 16">
        <Path d="M3 14V2H1v12h2z" />
        <Path d="M7.8 9H15V7H7.8l1.9-1.8-1.5-1.4L4 8l4.2 4.2 1.5-1.4L7.8 9z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__arrow-target-right" viewBox="0 0 16 16">
        <Path d="M15 14V2h-2v12h2z" />
        <Path d="M6.3 10.8l1.5 1.4L12 8 7.8 3.8 6.3 5.2 8.2 7H1v2h7.2l-1.9 1.8z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__arrow-target-up" viewBox="0 0 16 16">
        <Path d="M14 1H2v2h12V1z" />
        <Path d="M10.8 9.7l1.4-1.5L8 4 3.8 8.2l1.4 1.5L7 7.8V15h2V7.8l1.8 1.9z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__arrow-up--circle-o" viewBox="0 0 16 16">
        <Path d="M12.2 7.2L9.4 4.4 8 3 6.6 4.4 3.8 7.2l1.4 1.5L7 6.8V12h2V6.8l1.8 1.9 1.4-1.5z" />
        <Path d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM8 2c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__arrow-up--circle" viewBox="0 0 16 16">
        <Path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm4.2 7.2l-1.4 1.4L9 6.8V13H7V6.8L5.2 8.6 3.8 7.2l2.8-2.8L8 3l1.4 1.4 2.8 2.8z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__arrow-up" viewBox="0 0 16 16">
        <Path d="M12.2 7.2l-1.4 1.4L9 6.8V13H7V6.8L5.2 8.6 3.8 7.2l2.8-2.8L8 3l1.4 1.4z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__assign" viewBox="0 0 16 16">
        <Path d="M13 9v5H2V3h5V1H0v15h15V9h-2z" />
        <Path d="M4 5h2v3.5L11.6 3 13 4.4 7.5 10H11v2H4z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__available-balance" viewBox="0 0 16 16">
        <Path d="M1 0h9v3H1zm8 6.1V4H0v3h7.5c.5-.4 1-.7 1.5-.9zM6.6 8H1v3h4.5c.1-1.1.5-2.1 1.1-3zm-1.1 4H0v3h6.6c-.6-.9-1-1.9-1.1-3zm6-5C9 7 7 9 7 11.5S9 16 11.5 16s4.5-2 4.5-4.5S14 7 11.5 7zm.5 6.8v.8h-1v-.8h-1v-1.1h1.9c.2 0 .4-.2.4-.4s-.2-.4-.4-.4H11c-.7 0-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3v-.8h1v.8h1v.9h-1.8c-.2 0-.4.2-.4.4s.2.4.4.4h.8c.8 0 1.4.6 1.4 1.4 0 .7-.6 1.4-1.4 1.4z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__avatar--badge" viewBox="0 0 16 16">
        <Path d="M6 0h4v2H6z" />
        <Path d="M11 1v2H5V1H2v15h12V1h-3zM8 6c.8 0 1.5.7 1.5 1.5S8.8 9 8 9s-1.5-.7-1.5-1.5S7.2 6 8 6zm0 7c-1.5 0-3-.1-3-1.3 0-1.8.7-2.4 1.1-2.6.4.5 1.1.9 1.9.9s1.5-.4 1.9-.9c.4.2 1.1.7 1.1 2.6 0 1.2-1.5 1.3-3 1.3z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__avatar--circle" viewBox="0 0 16 16">
        <Path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 3c1.1 0 2 .9 2 2S9 7 8 7c-1.1 0-2-.9-2-2s.9-2 2-2zm0 9c-2 0-4-.1-4-1.7 0-2.3.9-3 1.4-3.3l.2-.1C6.3 7.5 7.1 8 8 8s1.7-.5 2.3-1.1l.2.1c.5.3 1.5.9 1.5 3.3 0 1.6-2 1.7-4 1.7z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__backspace" viewBox="0 0 16 16">
        <Path d="M4.1 2L0 8l4.1 6H16V2H4.1zM12 9.8L10.8 11 9 9.2 7.2 11 6 9.8 7.8 8 6 6.2 7.2 5 9 6.8 10.8 5 12 6.2 10.2 8 12 9.8z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__bar-graph--square" viewBox="0 0 16 16">
        <Path d="M0 0v16h16V0H0zm5 13H3V6h2v7zm4 0H7V3h2v10zm4 0h-2V9h2v4z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__bar-graph" viewBox="0 0 16 16">
        <Path d="M4 5h2v7H4zm4-3h2v10H8zm4 6h2v4h-2z" />
        <Path d="M2 14V0H0v16h16v-2H2z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__bell-slash" viewBox="0 0 16 16">
        <Path d="M8 16c1.1 0 2-.9 2-2H6c0 1.1.9 2 2 2zm.8-14.4c.1-.2.2-.4.2-.6 0-.6-.4-1-1-1S7 .4 7 1c0 .2.1.4.2.6C4.8 2 3 4 3 6.5c0 1.5-.2 2.3-.4 2.8L10 1.9c-.4-.1-.8-.3-1.2-.3z" />
        <Path d="M13 6.5c0-.6-.1-1.2-.3-1.8L16 1.4 14.6 0 0 14.6 1.4 16l3-3h9.1c1.3 0 2-1.6 1.1-2.6-.7-.7-1.6-.5-1.6-3.9z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__bell" viewBox="0 0 16 16">
        <Path d="M14.6 10.4c-.7-.7-1.6-.5-1.6-3.9C13 4 11.2 2 8.8 1.6c.1-.2.2-.4.2-.6 0-.6-.4-1-1-1S7 .4 7 1c0 .2.1.4.2.6C4.8 2 3 4 3 6.5c0 3.4-.9 3.2-1.6 3.9-.9 1-.2 2.6 1.1 2.6h11c1.3 0 2-1.6 1.1-2.6zM6 14c0 1.1.9 2 2 2s2-.9 2-2H6z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__billing" viewBox="0 0 16 16">
        <Path d="M9.2 6.5H7c-.6 0-1-.4-1-1s.4-1 1-1h5V2H9V0H7v2h-.5C4.6 2 3 3.6 3 5.5S4.6 9 6.5 9H9c.6 0 1 .4 1 1s-.4 1-1 1H4v3h3v2h2v-2h.2c2.1 0 3.8-1.7 3.8-3.8 0-2-1.7-3.7-3.8-3.7z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__bookmark" viewBox="0 0 16 16">
        <Path d="M7.9 8c.1 0 .1 0 0 0zM3 2v12l5-3 5 3V2z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__bug" viewBox="0 0 16 16">
        <Path d="M8 0C6.2 0 4.8 1.3 4.5 3h6.9C11.2 1.3 9.8 0 8 0z" />
        <Path d="M13 10h3V8h-3V6.4l2-2L13.6 3l-2 2H4.4l-2-2L1 4.4l2 2V8H0v2h3v1.7c0 .3.1.5.2.7L1 14.6 2.4 16l1.8-1.8c.7.8 1.7 1.4 2.8 1.7V9h2v6.9c1.1-.2 2.1-.8 2.8-1.7l1.8 1.8 1.4-1.4-2.2-2.2c.1-.2.1-.5.2-.7V10z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__bullhorn" viewBox="0 0 16 16">
        <Path d="M14.6 1.1L9 4H1c-.6 0-1 .4-1 1v5c0 .6.4 1 1 1h1.9l.9 3.3c.1.4.5.7 1 .7h1.9c.7 0 1.1-.6 1-1.3L6.9 11H9l5.6 2.9c.7.3 1.4-.2 1.4-.9V2c0-.7-.7-1.2-1.4-.9zM3 9H2V6h1v3zm3 0H5V6h1v3z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__calendar-minus" viewBox="0 0 16 16">
        <Path d="M11 0h2v2h-2V0zM3 0h2v2H3V0z" />
        <Path d="M14 1v2h-4V1H6v2H2V1H0v15h16V1h-2zm-2.5 9h-7V8h7v2z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__calendar-plus" viewBox="0 0 16 16">
        <Path d="M11 0h2v2h-2zM3 0h2v2H3z" />
        <Path d="M14 1v2h-4V1H6v2H2V1H0v15h16V1h-2zm-2.5 9H9v2.5H7V10H4.5V8H7V5.5h2V8h2.5v2z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__calendar" viewBox="0 0 16 16">
        <Path d="M14 1v2h-4V1H6v2H2V1H0v15h16V1h-2zM5 14H3v-2h2v2zm0-3H3V9h2v2zm0-3H3V6h2v2zm4 6H7v-2h2v2zm0-3H7V9h2v2zm0-3H7V6h2v2zm4 6h-2v-2h2v2zm0-3h-2V9h2v2zm0-3h-2V6h2v2z" />
        <Path d="M11 0h2v2h-2zM3 0h2v2H3z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__cancel" viewBox="0 0 16 16">
        <Path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM2 8c0-1.3.4-2.4 1.1-3.4l8.3 8.3c-1 .7-2.1 1.1-3.4 1.1-3.3 0-6-2.7-6-6zm10.8 3.5L4.5 3.2C5.4 2.4 6.7 2 8 2c3.3 0 6 2.7 6 6 0 1.3-.4 2.6-1.2 3.5z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__caret-down" viewBox="0 0 16 16">
        <Path d="M11 6l-3 5-3-5h6z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__caret-left" viewBox="0 0 16 16">
        <Path d="M10 11L5 8l5-3v6z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__caret-right" viewBox="0 0 16 16">
        <Path d="M6 5l5 3-5 3V5z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__caret-up" viewBox="0 0 16 16">
        <Path d="M5 10l3-5 3 5H5z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__carets-sortable" viewBox="0 0 16 16">
        <Path d="M11 9l-3 5-3-5h6z" />
        <Path d="M5 7l3-5 3 5H5z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__check" viewBox="0 0 16 16">
        <Path d="M8.4 10.1L7 11.6l-1.4-1.4-2.2-2.1 1.4-1.4 2.1 2.1 4.3-4.4 1.4 1.4z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__check--circle-o" viewBox="0 0 16 16">
        <Path d="M8 2c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6m0-2C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z" />
        <Path d="M6.9 9.3L4.8 7.1 3.4 8.6l2.1 2.1 1.4 1.4 1.5-1.4 4.2-4.3L11.2 5z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__check--circle" viewBox="0 0 16 16">
        <Path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm.4 10.7L7 12.1l-1.4-1.4-2.2-2.1 1.4-1.4 2.1 2.1L11.2 5l1.4 1.4-4.2 4.3z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__chevron-double-down" viewBox="0 0 16 16">
        <Path d="M8 10.3L5.3 7.6 4 9l2.7 2.7L8 13l1.3-1.3L12 9l-1.3-1.4z" />
        <Path d="M8 5.3L5.3 2.6 4 4l2.7 2.7L8 8l1.3-1.3L12 4l-1.3-1.4z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__chevron-double-left" viewBox="0 0 16 16">
        <Path d="M5.7 8l2.7-2.7L7 4 4.3 6.7 3 8l1.3 1.3L7 12l1.4-1.3z" />
        <Path d="M10.7 8l2.7-2.7L12 4 9.3 6.7 8 8l1.3 1.3L12 12l1.4-1.3z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__chevron-double-right" viewBox="0 0 16 16">
        <Path d="M7.6 10.7L9 12l2.7-2.7L13 8l-1.3-1.3L9 4 7.6 5.3 10.3 8z" />
        <Path d="M2.6 10.7L4 12l2.7-2.7L8 8 6.7 6.7 4 4 2.6 5.3 5.3 8z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__chevron-double-up" viewBox="0 0 16 16">
        <Path d="M10.7 8.4L12 7 9.3 4.3 8 3 6.7 4.3 4 7l1.3 1.4L8 5.7z" />
        <Path d="M10.7 13.4L12 12 9.3 9.3 8 8 6.7 9.3 4 12l1.3 1.4L8 10.7z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__chevron-down" viewBox="0 0 16 16">
        <Path d="M8 8.2L5.2 5.3 3.8 6.8l2.8 2.8L8 11l1.4-1.4 2.8-2.8-1.4-1.5z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__chevron-left" viewBox="0 0 16 16">
        <Path d="M7.8 8l2.9 2.8-1.5 1.4-2.8-2.8L5 8l1.4-1.4 2.8-2.8 1.5 1.4z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__chevron-right" viewBox="0 0 16 16">
        <Path d="M8.2 8l-2.9 2.8 1.5 1.4 2.8-2.8L11 8 9.6 6.6 6.8 3.8 5.3 5.2z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__chevron-up" viewBox="0 0 16 16">
        <Path d="M8 7.8l-2.8 2.9-1.4-1.5 2.8-2.8L8 5l1.4 1.4 2.8 2.8-1.4 1.5z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__clock" viewBox="0 0 16 16">
        <Path d="M12.497-.035L16.033 3.5l-1.061 1.06-3.536-3.535zM4.629 1.096L1.093 4.632.033 3.57 3.568.035zM8 2C4.2 2 1 5.2 1 9s3.2 7 7 7 7-3.2 7-7-3.2-7-7-7zm1.5 10.5L7 10V5h2v4.2l1.9 1.9-1.4 1.4z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__comment-dots" viewBox="0 0 16 16">
        <Path d="M16 0H0v12h5v4l5.6-4H16V0zM8 5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zM4 7c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm8 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__comment" viewBox="0 0 16 16">
        <Path d="M16 0H0v12h5v4l5.6-4H16z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__comments" viewBox="0 0 16 16">
        <Path d="M13.5 5v4.5H6l-2 1.9V13h6.8l3.2 3v-3h2V5z" />
        <Path d="M5.2 8H12V0H0v8h2v3z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__copy" viewBox="0 0 16 16">
        <Path d="M4 4v12h12V4H4zm10 7h-3v3H9v-3H6V9h3V6h2v3h3v2zm-3-9H2v9H0V0h11v2z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__credit-card-plus" viewBox="0 0 16 16">
        <Path d="M0 2h15v2H0zm10.5 6.5H15V6H0v8h8.5v-3.5h2v-2zM6 11H2V9h4v2z" />
        <Path d="M14 12v-2h-2v2h-2v2h2v2h2v-2h2v-2z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__credit-card" viewBox="0 0 16 16">
        <Path d="M0 2h16v2H0zm0 4v8h16V6H0zm6 5H2V9h4v2zm4 0H8V9h2v2z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__dashboard-grid" viewBox="0 0 16 16">
        <Path d="M1 1h6v4H1V1zm0 6h6v8H1V7zm8-6h6v9H9V1zm0 11h6v3H9v-3z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__db-storage" viewBox="0 0 16 16">
        <Ellipse cx={8} cy={3} rx={6} ry={3} />
        <Path d="M8 8C4.7 8 2 6.7 2 5v3c0 1.7 2.7 3 6 3s6-1.3 6-3V5c0 1.7-2.7 3-6 3z" />
        <Path d="M8 13c-3.3 0-6-1.3-6-3v3c0 1.7 2.7 3 6 3s6-1.3 6-3v-3c0 1.7-2.7 3-6 3z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__device-ata" viewBox="0 0 16 16">
        <Path d="M0 4v8h16V4H0zm4 6H2V6h2v4zm4 0H6V6h2v4zm4.5-1c-.8 0-1.5-.7-1.5-1.5S11.7 6 12.5 6s1.5.7 1.5 1.5S13.3 9 12.5 9z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__device-fax" viewBox="0 0 16 16">
        <Path d="M5 13h3v1H5zm0-2h3v1H5zM2 0h12v1H2z" />
        <Path d="M0 2v7h13v3h-3v3H3v-4H2v5h9.5l2.5-2.5V9h2V2H0zm4 2H1V3h3v1zm2 0H5V3h1v1zm5 11v-2h2l-2 2z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__device-mobile" viewBox="0 0 16 16">
        <Path d="M3 0v16h10V0H3zm5 15c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm4-3H4V2h8v10z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__device-soft-phone" viewBox="0 0 16 16">
        <Path d="M15 1v10H1V1h14m1-1H0v13h16V0z" />
        <Path d="M15 1v10H1V1h14m1-1H0v13h16V0z" />
        <Path d="M5.3 6.6c-.5-.5-.7-1.2-.7-1.2l.5-.8-.4-1.4S4.6 3 4.5 3c0 0-.6-.1-.9.2-.8.8-1.1 1.8 1.1 4l.1.1c2.2 2.2 3.2 2 4 1.1.3-.3.2-1 .2-1l-.2-.1-1.4-.5-.8.6c-.1 0-.7-.1-1.3-.8zM5 14h6l1 2H4z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__device-sprint-phone" viewBox="0 0 16 16">
        <Path d="M7.5 7.5h1c.3 0 .5.2.5.5s-.2.5-.5.5H6V10h2.5c1.1 0 2-.9 2-2s-.9-2-2-2h-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5H10V3.5H7.5c-1.1 0-2 .9-2 2s.9 2 2 2z" />
        <Path d="M3 0v16h10V0H3zm5 15c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm4-3H4V2h8v10z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__device-tablet" viewBox="0 0 16 16">
        <Path d="M0 15h16V1H0v14zm15-7c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1zm-3-6v12H2V2h10z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__device-voip-phone" viewBox="0 0 16 16">
        <Path d="M0 0h5v16H0V0zm6 1v14h10V1H6zm3 13H7v-2h2v2zm0-3H7V9h2v2zm0-3H7V6h2v2zm3 6h-2v-2h2v2zm0-3h-2V9h2v2zm0-3h-2V6h2v2zm3 6h-2v-2h2v2zm0-3h-2V9h2v2zm0-3h-2V6h2v2zm0-3H7V2h8v3z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__dot" viewBox="0 0 16 16">
        <Circle cx={8} cy={8} r={4} />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__downgrade" viewBox="0 0 16 16">
        <Path d="M1 0h14v2H1zm4 14h6v2H5zm4-4.8V4H7v5.2L5.2 7.4 3.8 8.8l2.8 2.8L8 13l1.4-1.4 2.8-2.8-1.4-1.4z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__download-cloud" viewBox="0 0 16 16">
        <Path d="M6.6 14.6l-3-3L5 10.1l2 2.1V7h2v5.2l2-2.1 1.4 1.5-3 3L8 16z" />
        <Path d="M10 5.1c.1.4.5.8 1 .8h.8c.7 0 1.4.3 1.8.9.3.5.5 1.1.4 1.6-.1.3-.2.6-.3.8l.2.2 1.2 1.2c.4-.5.8-1.2.9-1.9.2-1.1-.1-2.2-.7-3.1-.8-1.1-2.1-1.8-3.4-1.8h-.1c-.5-1.2-1.4-2.3-2.6-3C7.8 0 6.1-.2 4.6.2 3 .6 1.7 1.6.9 3 0 4.4-.2 6 .2 7.6c.2.9.7 1.8 1.3 2.5l1.4-1.4c-.4-.5-.6-1-.8-1.5C1.9 6 2 4.9 2.6 4c.5-.9 1.4-1.6 2.5-1.9 1-.2 2.1-.1 3.1.5.9.5 1.6 1.4 1.8 2.5z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__download" viewBox="0 0 16 16">
        <Path d="M16 14v-3h-2v3H2v-3H0v5h16v-2z" />
        <Path d="M9 8.2V1H7v7.2L5.2 6.3 3.8 7.8 8 12l4.2-4.2-1.4-1.5z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__drag-handle" viewBox="0 0 16 16">
        <Path d="M1 6h14v1H1z" />
        <Path d="M1 9h14v1H1z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__ear" viewBox="0 0 16 16">
        <Circle cx={10} cy={6} r={2} />
        <Path d="M3.4 1.4L2 0C.8 1.7 0 3.7 0 6c0 2.8 1.1 5.3 2.9 7.1l1.4-1.4C2.9 10.2 2 8.2 2 6c0-1.7.5-3.3 1.4-4.6zM12 14c-1.1 0-2-.9-2-2v-2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4h2c0-3.3-2.7-6-6-6S4 2.7 4 6c0 2.6 1.7 4.8 4 5.7v.3c0 2.2 1.8 4 4 4s4-1.8 4-4h-2c0 1.1-.9 2-2 2z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__edit" viewBox="0 0 16 16">
        <Path
          transform="rotate(-45.001 8.884 7.116)"
          d="M3.6 5.1h10.5v4H3.6z"
        />
        <Path d="M2 14l3.5-.7-2.8-2.8z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__ellipses" viewBox="0 0 16 16">
        <Circle cx={2} cy={8} r={2} />
        <Circle cx={8} cy={8} r={2} />
        <Circle cx={14} cy={8} r={2} />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__enter" viewBox="0 0 16 16">
        <Path d="M9.8 9H16V7H9.8l1.9-1.8-1.5-1.4L6 8l4.2 4.2 1.5-1.4z" />
        <Path d="M7 4V0H0v16h7v-4H5v2H2V2h3v2z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__exit" viewBox="0 0 16 16">
        <Path d="M12.2 9H6V7h6.2l-1.9-1.8 1.5-1.4L16 8l-4.2 4.2-1.5-1.4z" />
        <Path d="M7 4V0H0v16h7v-4H5v2H2V2h3v2z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__extension" viewBox="0 0 16 16">
        <Path d="M10 0h2v2.5h-2zM4 13.5h2V16H4z" />
        <Path d="M6 4V0H4v10H0v2h10v4h2V6h4V4H6zm4 6H6V6h4v4z" />
        <Path d="M0 4h2.5v2H0zm13.5 6H16v2h-2.5z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__eye" viewBox="0 0 16 16">
        <Path d="M8 3C4.5 3 1.5 5 0 8c1.5 3 4.5 5 8 5s6.5-2 8-5c-1.5-3-4.5-5-8-5zm0 8.6c-1.9 0-3.5-1.6-3.5-3.5S6.1 4.6 8 4.6s3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z" />
        <Circle cx={8} cy={8.1} r={1.5} />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__eye-slash" viewBox="0 0 16 16">
        <Path d="M2.2 10.8l2.3-2.3v-.4c0-1.9 1.6-3.5 3.5-3.5h.4l1.4-1.4C9.2 3.1 8.6 3 8 3 4.5 3 1.5 5 0 8c.5 1.1 1.3 2 2.2 2.8z" />
        <Path d="M12.7 4.3L16 1l-1-1-3.7 3.7-1.4 1.4-1.5 1.5-1.9 1.9L5 10l-1.7 1.7L0 15l1 1 3.7-3.7c1 .5 2.1.7 3.3.7 3.5 0 6.5-2 8-5-.8-1.5-1.9-2.8-3.3-3.7zM8 11.6c-.7 0-1.4-.2-2-.6l1.5-1.5c.1.1.3.1.5.1.8 0 1.5-.7 1.5-1.5 0-.2 0-.4-.1-.5l1.5-1.5c.4.6.6 1.2.6 2 0 1.9-1.6 3.5-3.5 3.5z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__failover" viewBox="0 0 16 16">
        <Path d="M10.4 16l2.1-2.1 2.1 2.1 1.4-1.4-2.1-2.1 2.1-2.1L14.6 9l-2.1 2.1L10.4 9 9 10.4l2.1 2.1L9 14.6l1.4 1.4zM2 6h2v4H2zm7.983-3.984v2h-4v-2zM9 12H6v2h2v-1h1zm5-6h-2v3h1V8h1z" />
        <Path d="M14 2v3h-3V2h3m2-2H9v7h7V0zM0 0h7v7H0zm5 11v3H2v-3h3m2-2H0v7h7V9z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__file-o" viewBox="0 0 16 16">
        <Path d="M9 0H2v16h12V5L9 0zm-.5 5.5v-4l4 4h-4z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__file" viewBox="0 0 16 16">
        <Path d="M14 4h-4V0z" />
        <Path d="M8.5 5.5V0H2v16h12V5.5z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__folder" viewBox="0 0 16 16">
        <Path d="M9 3L8 1H0v13h16V3H9z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__folder-check" viewBox="0 0 16 16">
        <Path d="M9 3L8 1H0v13h16V3H9zm-.7 7.8l-1.2 1.3-1.2-1.2L4 9.1l1.2-1.2L7 9.7l3.7-3.8L12 7.1l-3.7 3.7z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__folder-group" viewBox="0 0 16 16">
        <Path d="M9.8 3l-1-2H1.9v1H8l1 2h6v8h1V3z" />
        <Path d="M8 5L7 3H0v11h14V5H8z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__folder-minus" viewBox="0 0 16 16">
        <Path d="M9 3L8 1H0v13h16V3H9zM5 8h6v2H5V8z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__folder-open" viewBox="0 0 16 16">
        <Path d="M13 3V2H5.5L5 1H0v13L1.5 3z" />
        <Path d="M2.5 4.5L0 14h14l2-9.5z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__folder-plus" viewBox="0 0 16 16">
        <Path d="M9 3L8 1H0v13h16V3H9zm2 6.5H9v2H7v-2H5v-2h2v-2h2v2h2v2z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__folder-star" viewBox="0 0 16 16">
        <Path d="M9 3L8 1H0v13h16V3H9zm1.1 9L8 10.8 5.9 12l.4-2.6-1.8-1.7 2.4-.3L8 5l1 2.3 2.5.3-1.7 1.8.3 2.6z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__forward" viewBox="0 0 16 16">
        <Path d="M14.6 6.6l-2.8-2.8-1.5 1.4L13.2 8l-2.9 2.8 1.5 1.4 2.8-2.8L16 8z" />
        <Path d="M9.6 6.6L6.8 3.8 5.3 5.2 7.2 7H4.5C2 7 0 9 0 11.5h2C2 10.1 3.1 9 4.5 9h2.7l-1.8 1.8 1.4 1.4 2.8-2.8L11 8 9.6 6.6z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__funnel" viewBox="0 0 16 16">
        <Path d="M14.3 1H1.7c-.6 0-.9.7-.5 1.1L6 7v6c0 .2.1.4.3.5L9 14.9c.4.3 1 0 1-.5V7l4.8-4.9c.4-.4.1-1.1-.5-1.1zM9.7 6.2H8.3L12.5 2h1.4L9.7 6.2z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__global" viewBox="0 0 16 16">
        <Path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM5.9 14.7c0-.1 0-.1 0 0zm2.3-3.8l-.1.4c0 .1-.1.4-.1.4 0 .1-.1.2-.1.3 0 0-.3.1-.3.2-.1 0-.1.1-.2.1l-.1.1c0 .1.1.3 0 .4-.1 0-.1 0-.1.1-.1 0 0 .1-.1.1s-.2.1-.2.2c0 .2 0 .2-.1.3 0 0-.2 0-.2.1v.2l-.2.1c-.2 0-.2 0-.3.1v.1c0 .1-.1 0-.4.3.3-.4.3-.3.3-.3 0 .1 0 .1-.1.2l-.1.1v.3c-.1 0-.2-.1-.4-.1 0-.2 0-.5.1-.5l.1-.2v-.4c0-.1.1-.2.1-.3.2-.1.1-.8.2-.8 0-.4.1-.5-.2-.6l-.2-.2c-.2 0-.3-.4-.3-.4-.1 0-.1-.1-.1-.2l-.3-.4c-.2-.1 0-.2 0-.4-.1-.1 0-.4.1-.4l.1-.1c.1.1.2-.1.1-.1v-.3c.1-.1 0-.3-.1-.1-.1 0-.4 0-.4-.2 0-.1-.1-.3-.2-.3 0-.1-.3-.3-.4-.3 0-.1-.1-.1-.1-.1.1.1 0 0-.1 0-.2 0-.4-.1-.4-.1 0-.1-.2-.1-.3-.2-.1 0-.2-.2-.2-.3 0-.2-.1-.4-.2-.4 0-.1-.2-.2-.2-.2v-.2c0-.1-.2-.3-.2-.2s.2.2.2.3l.2.3c.3.4-.2.1-.2-.1-.1-.1-.2-.3-.2-.4 0-.1-.1-.3-.1-.3 0-.1-.1-.2-.3-.2l-.2-.1c0-.1 0-.2-.1-.2v-.7c.3-.9.9-1.7 1.5-2.3h.1c.1.1.2.1.3.1h.2s.2-.1.1-.1c0-.1 0-.1-.1-.1 0-.1.2 0 .3 0 0-.1-.1-.1 0-.1.1-.1.2 0 .2-.1 0 0 .1 0 .1.1.1 0 .3.4.3.1.1 0 .1.2.1.3.1-.2.1-.3.1-.4.1 0 0-.1 0-.1s.1.1.1 0v.1H5v.3c0 .1-.2.1-.2.1 0 .1.2.1.3.2h-.2c-.1 0-.3.1-.4 0 .1 0 .2-.2.2-.3 0-.1-.1 0-.1.1 0 .2-.1 0-.2.1l-.2.1c-.2 0-.1.2-.1.3 0 .1.2.2.2.3.2.1.2.1.4.1 0 .1.1.1.1.1 0 .1.1.1.2.1 0-.1.2.1.2.2 0 0 .1.1.1.2 0 0 .2 0 .2-.1-.1 0-.1 0-.1-.1-.1-.1-.1-.2 0-.2 0 .1.3 0 .1-.1 0-.1.1-.2 0-.3 0-.1-.1 0-.1-.1.1 0 0-.2 0-.3h.1c.1 0 .2.2.3 0 .2.1 0 .2.2.1V4c.1 0 .2.1.2 0 0 0 .1-.1.1-.2 0 0 .1.3.2.3 0 .1.2.2.2.3.1 0 .1 0 .1.1 0 0 .1-.1.1 0 .1 0 .2 0 .2.1-.1 0-.1.1-.1.1 0 .1-.3 0-.3 0-.2.2-.5 0-.7.1-.1 0-.4.3-.4.4.2 0 .3-.2.4-.2h.1s0 .1.1.1c0 .1.1.1.1.1v.1h-.1v-.1c-.1 0-.2.1-.3.1l-.1.1c-.1.1-.1.3-.1.3l-.2.1c0 .1-.1.1-.1.2l-.1.1c-.1.1-.2.3-.3.3 0 .2-.2.2-.2.4.1 0 .1.2.1.3 0 .1 0 .2-.1.2v-.1c0-.1-.1-.2-.1-.3 0-.1-.1 0-.2 0 0-.1-.2-.1-.3-.1.1 0 .1 0 .1.1h-.2s0-.1-.1-.1c-.3 0-.4.2-.4.4v.4c0 .1.1.2.1.3.1-.1.2.1.3.1h.2c-.1 0 0-.2.1-.3 0 .1.1 0 .1 0 0-.1.1-.1.1-.1 0-.1.1.1 0 .1s-.2.1-.2.1-.1.1-.1.2c-.1.1 0 .1 0 .2h.3v-.1c.1 0 0 .3.1.3 0 .1.1.2.1.3.1 0 .1.1.1.2.1 0 .3 0 .3-.1.1 0 .1.1.1.2.3 0 .1-.3.2-.3h.1l.1-.1h.2c.1 0 .1-.1.2-.1 0 0 0 .2.2.2h.4c.1 0 .1.1.1.1s.1 0 .1.1.1.1.1.1c.1 0 0 .1.1.1.1.1.1.1.2.1 0-.1.1 0 .1 0l.1.1c.1.1.1 0 .2.1s.1.2.1.3v.2c-.1 0 .1.1.1 0 .1 0 .1.1.2.1 0 .1.1.1.1 0 .1 0 .1.2.1.3-.3-.2-.3-.3-.2-.3.1-.1 0 0 .1 0 .4 0 .2.4.2.6 0 .2.2.3-.1.3zm6.3-1.5s0 .1 0 0c-.1.1-.1.2-.2.2 0 .1-.1.2-.2.3-.1.1-.3.2-.3.3.1-.1-.3.3-.2.3 0 .1-.1.5 0 .5 0 0 .1.4 0 .4v.6c-.4.7-1 1.2-1.6 1.7l-.3-.3c0-.1-.1-.2-.1-.3l-.1-.2c0-.1-.2-.5-.2-.5l-.1-.2c0-.2-.4-.3-.4-.4-.1 0-.1-.4-.1-.4 0-.2.1-.3.1-.4 0-.3-.3-.1-.3-.3l-.1-.2c-.1 0-.1-.2-.1-.3.1-.1.1-.4.1-.4h-.3c0-.2-.5-.1-.7-.1 0 .1-.2-.2-.2-.3-.1 0-.3-.2-.3-.3.3-.1.1-.5.1-.6-.1 0-.1-.2 0-.2 0-.1.2-.2.2-.3 0 0 .1 0 .1-.1 0-.2 0-.3.1-.4 0-.1.1-.1.1-.2s0 0 .1-.1c.1 0 .1-.1.2-.2v-.1l.1-.3c.1-.2 0-.1.1-.1s.1-.1.2-.1c0-.1 0-.1.1-.1 0 .1.2 0 .2 0 0-.1.2-.2.3-.2 0-.1.4 0 .5 0s.3.4.3.4h.2c0 .1.1.1.2.1s.4-.1.4-.2c0 0 .1 0 .1.1.1 0 .5 0 .5.1.1 0 .1.1.2.1 0 .1.1.3.2.3 0 .1 0 .2.1.3.1.1.2.3.3.4-.1.1.1.2.1.3l.1.2c0 .1.3.4.4.5 0 0 .1 0 .3.4.1 0 .3-.1.4-.1-.5.2-.6.2-.6.4zm.2-1.4c-.1 0-.4 0-.4.2-.1 0-.3.1-.3.1-.2 0-.2-.3-.3-.3 0 0-.1 0-.1-.1.1 0-.2-.5-.2-.6 0-.1-.1-.2-.1-.3-.1-.1-.2-.2-.2-.3-.1 0-.3-.2-.3-.3.1 0 .2 0 .2-.1-.1 0-.1-.1 0-.1 0-.1.1-.1.1-.2.1-.1 0-.1 0-.2H13c.3.2 0 .2 0 .2l-.2-.1c.1-.1.5 0 .5-.1 0 0 .1.2.1 0 .1 0 .1.2.3.1 0 .1.3-.1.1-.1 0-.2-.2-.2-.3-.3-.1 0-.1-.1-.2-.1 0-.1-.1 0-.1 0-.2 0-.1-.1-.2-.1 0-.2-.1-.2-.1 0-.1.2-.2.3-.2.4h-.1c-.1-.1-.1-.2-.1-.3s-.1-.1-.2-.1c-.2 0-.1.2-.1.3.1 0-.1.1-.1.2-.2 0-.1-.2-.2-.3-.1-.1 0-.1-.1-.1 0 0 .1-.2 0-.2l-.2-.1c-.1 0-.3-.3-.4-.2 0 .1.1.1.1.2.1 0 .1.2.3.2v.1c.1 0 .1.1.1.1 0 .1-.1 0-.1 0 0 .1 0 0-.1.1 0-.1 0-.3-.1-.3-.1-.1-.2-.1-.3-.2-.1 0-.1-.2-.2-.2 0 .1-.1.1-.1.1-.1.1-.4 0-.4 0l-.2.4c0 .1-.1.1-.1.2.4.4 0 .4 0 .4-.2 0-.3-.1-.3-.3l.1-.4h.1c.1-.1.3 0 .3-.1.1 0 .1 0 .1.1.1 0 .2 0 .2-.1-.1 0-.1-.1-.1-.1.2-.2-.1-.3-.1-.4h-.1v-.1h-.1c-.1 0 0-.1 0-.2 0 0 .3.1.1 0 0-.2 0-.2-.2-.2 0-.1-.1-.1-.1-.2 0-.2.2 0 .2-.2.1 0 0 .1 0 .1V4c.1 0 .1-.1.2-.1 0 .1-.1.1 0 .2s.1.1.1.2c.1 0 .1.1.1.2.1 0 .2-.1.1-.1.2.1.1 0 .2-.1 0 .1.1-.1.2-.1.1-.1.3 0 .3-.1-.1 0-.1-.1-.1-.2.1 0 .2-.1.2 0v.2c.1.1.1 0 .1-.1 0 0-.1-.2-.1-.3 0 .1-.1.1-.1.1-.2 0-.3-.1-.4-.1l-.1-.2c-.1-.1.1-.1.1-.1 0-.1.5-.1.5-.3-.2 0 .2-.3.2-.3.1-.1.1-.2.3-.2.1 0 .7-.2.7-.1C14 4 14.9 5.8 15 7.8c-.1.1-.3.1-.3.2z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__headphones-slash" viewBox="0 0 16 16">
        <Path d="M14.3 3.1L16 1.4 14.6 0l-1.7 1.7-1.1 1.1L5 9.6.8 13.8l-.8.8L1.4 16l1-1H3v1h2v-3.6l8.3-8.3c.7 1.2 1.2 2.5 1.2 3.9 0 1-.2 1.9-.6 2.7-.2-.1-.4-.1-.6-.1H13V9h-2v7h2v-1h.2c1.2 0 2.2-1 2.2-2.2 0-.4-.1-.8-.3-1.2.6-1.1.9-2.3.9-3.6 0-1.8-.6-3.5-1.7-4.9zM1.8 9.9c-.2-.6-.3-1.2-.3-1.9 0-3.6 2.9-6.5 6.5-6.5.7 0 1.3.1 1.9.3L11.1.6C10.1.2 9.1 0 8 0 3.6 0 0 3.6 0 8c0 1.1.2 2.1.6 3.1l1.2-1.2z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__headphones" viewBox="0 0 16 16">
        <Path d="M16 8c0-4.4-3.6-8-8-8S0 3.6 0 8c0 1.4.3 2.6.9 3.7-.2.3-.3.7-.3 1.1 0 1.2 1 2.2 2.2 2.2H3v1h2V9H3v1.6h-.2c-.2 0-.5 0-.7.1-.4-.8-.6-1.7-.6-2.7 0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5c0 1-.2 1.9-.6 2.7-.2-.1-.4-.1-.6-.1H13V9h-2v7h2v-1h.2c1.2 0 2.2-1 2.2-2.2 0-.4-.1-.8-.3-1.2.6-1.1.9-2.3.9-3.6z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__home" viewBox="0 0 16 16">
        <Path d="M2 10.6V15h5v-3h2v3h5v-4.4L8 5.5z" />
        <Path d="M13 5.4V2h-2v1.6L8 1 0 8l1.3 1.3L8 3.5l6.7 5.8L16 8z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__info--circle-o" viewBox="0 0 16 16">
        <Path d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM8 2c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6z" />
        <Path d="M7 3h2v2H7V3zm3 9.5H6v-2h1V8H6V6h3v4.5h1v2z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__info--circle" viewBox="0 0 16 16">
        <Path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 3h2v2H7V3zm3 9.5H6v-2h1V8H6V6h3v4.5h1v2z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__ip-address" viewBox="0 0 16 16">
        <Path d="M8 0C4.7 0 2 2.7 2 6s5 10 6 10 6-6.7 6-10-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
        <Path d="M5.8 4h1.1v4H5.8zm3.6 0H7.6v4h1V6.8h.8c.8 0 1.4-.6 1.4-1.4S10.1 4 9.4 4zm-.2 1.9h-.6V4.8h.6c.3 0 .5.2.5.5s-.2.6-.5.6z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__layers--2" viewBox="0 0 16 16">
        <Path d="M8 11.5L2.5 8.8 0 10l8 4 8-4-2.5-1.2z" />
        <Path d="M16 6L8 2 0 6l8 4z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__layers--3" viewBox="0 0 16 16">
        <Path d="M8 13.5l-5.5-2.7L0 12l8 4 8-4-2.5-1.2z" />
        <Path d="M8 9.5L2.5 6.8 0 8l8 4 8-4-2.5-1.2z" />
        <Path d="M16 4L8 0 0 4l8 4z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__lightbulb" viewBox="0 0 16 16">
        <Path d="M8 0C4.7 0 2 2.7 2 6c0 1.5.6 2.9 1.5 4 .5.6.9 1.3 1.2 2h6.7c.2-.7.6-1.4 1.1-1.9C13.4 9 14 7.6 14 6c0-3.3-2.7-6-6-6zm0 3C6.3 3 5 4.3 5 6H4c0-2.2 1.8-4 4-4v1z" />
        <Path d="M5 15l1 1h4l1-1v-2H5z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__lightbulb-slash" viewBox="0 0 16 16">
        <Path d="M11 .8A6.11 6.11 0 008 0a6 6 0 00-6 6 6.11 6.11 0 00.8 3z" />
        <Path d="M5 15l1 1h4l1-1v-2H5v2z" />
        <Path d="M16 1.4L14.6 0 0 14.6 1.4 16l4-4h6a4.53 4.53 0 011.1-1.9A6.43 6.43 0 0014 6a7.8 7.8 0 00-.4-2.2z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__lightning-bolt" viewBox="0 0 16 16">
        <Path d="M2 8l6 2-2 6 8-8-6-2 2-6z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__link" viewBox="0 0 16 16">
        <Path d="M9.3 5.2L7.8 6.8c.3 0 .7.2.9.5.8.8.8 2.1 0 2.9l-2.2 2.2c-.8.8-2.1.8-2.9 0-.8-.8-.8-2.1 0-2.9l.1-.1c-.3-.8-.5-1.6-.5-2.4l-1 1c-1.6 1.6-1.6 4.2 0 5.8s4.2 1.6 5.8 0l2.2-2.2c1.6-1.6 1.6-4.2 0-5.8l-.9-.6z" />
        <Path d="M13.8 2.2C12.2.6 9.6.6 8 2.2L5.8 4.4c-1.6 1.6-1.6 4.2 0 5.8.3.3.5.4.8.6l1.5-1.5c-.2-.1-.6-.3-.8-.6-.8-.8-.8-2.1 0-2.9l2.2-2.2c.8-.8 2.1-.8 2.9 0 .8.8.8 2.1 0 2.9l-.1.1c.4.7.6 1.6.5 2.4l1-1c1.6-1.6 1.6-4.2 0-5.8z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__list-prioritize" viewBox="0 0 16 16">
        <Path d="M5.6 0L2.8 2.8 1.4 1.4 0 2.8l1.4 1.4 1.4 1.4L7 1.4zM8 12h8v3H8zM2 7h3v3H2zm0 5h3v3H2zM8 2h8v3H8zm0 5h8v3H8z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__list" viewBox="0 0 16 16">
        <Path d="M7 12h8v3H7zM1 7h3v3H1zm0-5h3v3H1zm0 10h3v3H1zM7 2h8v3H7zm0 5h8v3H7z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__location-pin" viewBox="0 0 16 16">
        <Path d="M8 0C4.7 0 2 2.7 2 6s5 10 6 10 6-6.7 6-10-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__location-scope" viewBox="0 0 16 16">
        <Path d="M16 7h-2.1c-.4-2.5-2.4-4.5-4.9-4.9V0H7v2.1C4.5 2.5 2.5 4.5 2.1 7H0v2h2.1c.4 2.5 2.4 4.5 4.9 4.9V16h2v-2.1c2.5-.4 4.5-2.4 4.9-4.9H16V7zm-8 5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
        <Circle cx={8} cy={8} r={2} />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__lock-open" viewBox="0 0 16 16">
        <Path d="M7.9 8s.1 0 0 0h.2-.2zM10 4c0-1.1-.9-2-2-2s-2 .9-2 2v4H4V4c0-2.2 1.8-4 4-4s4 1.8 4 4h-2z" />
        <Path d="M2 7v9h12V7H2zm7 6H7v-3h2v3z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__lock" viewBox="0 0 16 16">
        <Path d="M7.9 8c.1 0 .1 0 0 0zM12 8h-2V4c0-1.1-.9-2-2-2s-2 .9-2 2v4H4V4c0-2.2 1.8-4 4-4s4 1.8 4 4v4z" />
        <Path d="M2 7v9h12V7H2zm7 6H7v-3h2v3z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__mail" viewBox="0 0 16 16">
        <Path d="M8 7.9l8-4V2H0v1.9z" />
        <Path d="M8.5 9.9c-.2.1-.3.1-.5.1s-.3 0-.4-.1L0 6.1V14h16V6.1L8.5 9.9z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__main-office" viewBox="0 0 16 16">
        <Path d="M0 .5h10V2H0V.5zM16 7V5.5H9V3H1v13h3v-3h2v3h9V8H9V7h7zM4 11H3V9h1v2zm0-4H3V5h1v2zm3 4H6V9h1v2zm0-4H6V5h1v2zm5 3h1v2h-1v-2zm-3 0h1v2H9v-2z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__mic-slash" viewBox="0 0 16 16">
        <Path d="M10 2c0-1.1-.9-2-2-2S6 .9 6 2v5l4-4V2zm1.5 6c0 1.9-1.6 3.5-3.5 3.5-.7 0-1.4-.2-1.9-.6l1.1-1.1c.2.1.5.2.8.2 1.1 0 2-.9 2-2V7l6-6-1-1-5 5-3.8 3.8-1.1 1.1L4 11l-4 4 1 1 4-4c.6.4 1.3.8 2 .9v1.6H5V16h6v-1.5H9v-1.6c2.3-.5 4-2.5 4-4.9V7h-1.5v1zm-7 .5V7H3v1c0 .6.1 1.2.3 1.7l1.2-1.2z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__mic" viewBox="0 0 16 16">
        <Path d="M11.5 7v1c0 1.9-1.6 3.5-3.5 3.5S4.5 9.9 4.5 8V7H3v1c0 2.4 1.7 4.4 4 4.9v1.6H5V16h6v-1.5H9v-1.6c2.3-.5 4-2.5 4-4.9V7h-1.5z" />
        <Path d="M8 10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2S6 .9 6 2v6c0 1.1.9 2 2 2z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__minus--circle-o" viewBox="0 0 16 16">
        <Path d="M4 7h8v2H4V7z" />
        <Path d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM8 2c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__minus--circle" viewBox="0 0 16 16">
        <Path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm4 9H4V7h8v2z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__minus" viewBox="0 0 16 16">
        <Path d="M4 7h8v2H4V7z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__move-file" viewBox="0 0 16 16">
        <Path d="M6 7L5 5H0v11l1.5-9H6z" />
        <Path d="M14 16l2-7.5H2.5L0 16zm1-10h-2V0h2z" />
        <Path d="M9 2V0h6v2z" />
        <Path d="M8.109 5.614L13.412.311l1.414 1.414-5.303 5.303z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__multiple-items" viewBox="0 0 16 16">
        <Path d="M12 3H3v10h1.5V4.5H12z" />
        <Path d="M9 0H0v10h1.5V1.5H9zM6 6h9v10H6z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__music-note" viewBox="0 0 16 16">
        <Path d="M4 3v8.6c-.3-.1-.6-.1-1-.1-1.7 0-3 1-3 2.2S1.3 16 3 16s3-1 3-2.2V6.5l8-1.9v4.6c-.3-.1-.6-.2-1-.2-1.7 0-3 1-3 2.2s1.3 2.2 3 2.2 3-1 3-2.2V0L4 3z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__num-pad" viewBox="0 0 16 16">
        <Circle cx={3.5} cy={1.5} r={1.5} />
        <Circle cx={12.5} cy={1.5} r={1.5} />
        <Circle cx={8} cy={1.5} r={1.5} />
        <Circle cx={3.5} cy={5.8} r={1.5} />
        <Circle cx={12.5} cy={5.8} r={1.5} />
        <Circle cx={8} cy={5.8} r={1.5} />
        <Circle cx={3.5} cy={10.2} r={1.5} />
        <Circle cx={12.5} cy={10.2} r={1.5} />
        <Circle cx={8} cy={10.2} r={1.5} />
        <Circle cx={8} cy={14.5} r={1.5} />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__number" viewBox="0 0 16 16">
        <Path d="M16 6V4h-4V0h-2v4H6V0H4v4H0v2h4v4H0v2h4v4h2v-4h4v4h2v-4h4v-2h-4V6h4zm-6 4H6V6h4v4z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__operator" viewBox="0 0 16 16">
        <Path d="M14.7 7.9c-.1-.1-.7-.9-1-1.3-.3-.3-.1-.5-.1-.7s.1-.7.1-1.1-.1-.9-.2-1.1l-.5-1C11.9.6 9.1.2 9.1.2 8.7.1 7.9 0 7 0v4.1c1.1.2 2 1.2 2 2.4 0 .5-.2 1-.4 1.4l2.7 2.7c.2.2.2.5 0 .7s-.5.2-.7 0L7.9 8.6c-.4.3-.9.4-1.4.4C5.1 9 4 7.9 4 6.5c0-.8.4-1.5 1-2V.3c-.6.1-1.2.4-1.7.8-1.8 1.4-2.2 3.6-2.2 3.6-.6 4.4 1.4 3.9 2 6.7.5 2.7-.5 4.6-.5 4.6H10s0-1.2.3-1.7c.3-.7 1.8-.7 2.5-.8.6-.1 1-.7.8-1.3-.1-.4 0-.7.1-.8.3-.3-1-.4-1-.7s1.1-.3 1.3-.5c0-.3-.1-.5-.1-.8 0-.2.8-.3 1-.5s-.1-.9-.2-1z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__paper-clip" viewBox="0 0 16 16">
        <Path d="M12.8 8.2l-5.3 5.4c-1.2 1.2-3 1.2-4.2 0s-1.2-3.1 0-4.2l7.3-7.3c.7-.7 1.8-.7 2.4 0 .6.7.7 1.8 0 2.5l-6.9 6.9c-.2.2-.5.2-.7 0-.2-.2-.2-.5 0-.7l5.4-5.5-1-1.1-5.4 5.5c-.8.8-.8 2 0 2.8s2 .8 2.8 0l6.9-6.9c1.2-1.3 1.2-3.3 0-4.6S10.8-.3 9.6 1L2.3 8.3c-1.7 1.8-1.7 4.6 0 6.4s4.5 1.8 6.3 0l5.3-5.4-1.1-1.1z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__paper-plane" viewBox="0 0 16 16">
        <Path d="M14 1.1L1.3 8.4c-.5.3-.4 1 .1 1.2l2.9 1.2 7.9-6.9c.2-.1.4.1.2.2l-6.6 8v2.2c0 .6.8.9 1.2.4l1.7-2.1 3.4 1.4c.4.2.8-.1.9-.5l2-11.8c.1-.5-.5-.9-1-.6z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__park--circle-o" viewBox="0 0 16 16">
        <Path d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM8 2c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6z" />
        <Path d="M9 4H5.5v8h2V9.5H9c1.5 0 2.8-1.2 2.8-2.8C11.8 5.2 10.5 4 9 4zm-.2 3.8H7.5v-2h1.2c.6 0 1 .4 1 1 .1.5-.4 1-.9 1z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__park--circle" viewBox="0 0 16 16">
        <Path d="M8.8 5.8H7.5v2h1.2c.6 0 1-.4 1-1 .1-.6-.4-1-.9-1z" />
        <Path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 9.5H7.5V12h-2V4H9c1.5 0 2.8 1.2 2.8 2.8 0 1.5-1.3 2.7-2.8 2.7z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__pause--circle-o" viewBox="0 0 16 16">
        <Path d="M5 5h2v6H5V5zm4 0h2v6H9V5z" />
        <Path d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM8 2c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__pause--circle" viewBox="0 0 16 16">
        <Path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11H5V5h2v6zm4 0H9V5h2v6z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__pbx" viewBox="0 0 16 16">
        <Path d="M7 8.7c-.7-.7-.9-1.5-.8-1.6l.8-1-.6-1.8s-.1-.2-.2-.2-.9-.2-1.3.2C3.7 5.5 3.3 6.7 6.2 9.6l.2.2c2.9 2.9 4.2 2.5 5.3 1.4.4-.4.3-1.3.2-1.4l-.2-.2L9.9 9l-1.1.7c-.1.1-.9-.1-1.6-.8L7 8.7zM6 0H0v6h2V2h4zm10 6V0h-6v2h4v4zm-6 10h6v-6h-2v4h-4zM0 10v6h6v-2H2v-4z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__phone" viewBox="0 0 16 16">
        <Path d="M14.9 11.1c-.1-.1-.3-.2-.3-.2l-3.1-1.1-2 1.2c-.1.1-1.6-.2-2.8-1.5l-.3-.3C5 7.9 4.6 6.6 4.8 6.4l1.4-1.8-1.1-3.2s-.1-.3-.2-.3c-.1-.1-1.7-.3-2.4.4-2 2-2.6 4.2 2.4 9.3l.3.3c5.1 5 7.2 4.4 9.3 2.4.7-.7.5-2.3.4-2.4z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__phone-answer" viewBox="0 0 16 16">
        <Path d="M8.3 2c1.8 0 2.9.7 2.9.9l.3 2.1 2.8 1.4s.3.1.4.1c.2 0 1.3-.8 1.3-1.9C16 1.9 14.9 0 8.2 0h-.4C1.1 0 0 1.9 0 4.6c0 1 1.2 1.9 1.3 1.9s.4-.1.4-.1L4.5 5 5 2.9C5 2.7 6.2 2 7.9 2h.4z" />
        <Path d="M12.9 10.9L8 6l-4.9 4.9 1.4 1.5L7 9.9V16h2V9.8l2.5 2.6z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__phone-hangup" viewBox="0 0 16 16">
        <Path d="M13 11.1l-1.4-1.5L9 12.1V6H7v6.2L4.4 9.6 3 11.1l3.6 3.5L8 16l1.4-1.4z" />
        <Path d="M8.3 2c1.8 0 2.9.7 2.9.9l.3 2.1 2.8 1.4s.3.1.4.1c.2 0 1.3-.8 1.3-1.9C16 1.9 14.9 0 8.2 0h-.4C1.1 0 0 1.9 0 4.6c0 1 1.2 1.9 1.3 1.9s.4-.1.4-.1L4.5 5 5 2.9C5 2.7 6.2 2 7.9 2h.4z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__phone-inbound" viewBox="0 0 16 16">
        <Path d="M11.5 6L16 1.5 14.5 0 10 4.5V1H8v7h7V6z" />
        <Path d="M12.9 12.4c-.1-.1-.3-.2-.3-.2l-2.9-1-1.8 1.1c-.1.1-1.5-.2-2.6-1.4l-.3-.3C3.7 9.4 3.4 8.2 3.5 8l1.3-1.7-1-2.9s-.1-.3-.2-.3c-.1-.1-1.5-.3-2.2.4C-.5 5.4-1 7.4 3.6 12.1l.3.3c4.7 4.6 6.7 4.1 8.6 2.2.7-.7.5-2.1.4-2.2z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__phone-missed" viewBox="0 0 16 16">
        <Path d="M16 1.5L14.5 0 12 2.5 9.5 0 8 1.5 10.5 4 8 6.5 9.5 8 12 5.5 14.5 8 16 6.5 13.5 4zm-3.1 10.9c-.1-.1-.3-.2-.3-.2l-2.9-1-1.8 1.1c-.1.1-1.5-.2-2.6-1.4l-.3-.3C3.7 9.4 3.4 8.2 3.5 8l1.3-1.7-1-2.9s-.1-.3-.2-.3c-.1-.1-1.5-.3-2.2.4C-.5 5.4-1 7.4 3.6 12.1l.3.3c4.7 4.6 6.7 4.1 8.6 2.2.7-.7.5-2.1.4-2.2z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__phone-outbound" viewBox="0 0 16 16">
        <Path d="M12.5 2L8 6.5 9.5 8 14 3.5V7h2V0H9v2zm.4 10.4c-.1-.1-.3-.2-.3-.2l-2.9-1-1.8 1.1c-.1.1-1.5-.2-2.6-1.4l-.3-.3C3.7 9.4 3.4 8.2 3.5 8l1.3-1.7-1-2.9s-.1-.3-.2-.3c-.1-.1-1.5-.3-2.2.4C-.5 5.4-1 7.4 3.6 12.1l.3.3c4.7 4.6 6.7 4.1 8.6 2.2.7-.7.5-2.1.4-2.2z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__phone-slash" viewBox="0 0 16 16">
        <Path d="M14.9 11.1c.1.1.3 1.7-.4 2.4-2 1.9-4 2.5-8.7-1.9L1.4 16 0 14.6 14.6 0 16 1.4l-8.7 8.7c1 .8 2.1 1 2.2.9l2-1.2 3.1 1.1s.2.1.3.2zM5 7.5c-.3-.5-.4-1-.2-1.1l1.4-1.8-1.1-3.2s-.1-.3-.2-.3c-.1-.1-1.7-.3-2.4.4C.7 3.3.1 5.2 3.4 9.1L5 7.5z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__pie-chart--25" viewBox="0 0 16 16">
        <Path d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM8 2c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6z" />
        <Path d="M8 3.5c-2.5 0-4.5 2-4.5 4.5H8V3.5z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__pie-chart--50" viewBox="0 0 16 16">
        <Path d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM8 2c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6z" />
        <Path d="M8 3.5c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5v-9z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__pie-chart--75" viewBox="0 0 16 16">
        <Path d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM8 2c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6z" />
        <Path d="M8 3.5c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5H8V3.5z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__pie-chart--100" viewBox="0 0 16 16">
        <Path d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM8 2c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6z" />
        <Circle cx={8} cy={8} r={4.5} />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__play--circle-o" viewBox="0 0 16 16">
        <Path d="M6 4.5L12 8l-6 3.5v-7z" />
        <Path d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM8 2c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__play--circle" viewBox="0 0 16 16">
        <Path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM6 11.5v-7L12 8l-6 3.5z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__plus--circle-o" viewBox="0 0 16 16">
        <Path d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM8 2c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6z" />
        <Path d="M12 7H9V4H7v3H4v2h3v3h2V9h3z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__plus--circle" viewBox="0 0 16 16">
        <Path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm4 9H9v3H7V9H4V7h3V4h2v3h3v2z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__plus" viewBox="0 0 16 16">
        <Path d="M12 9H9v3H7V9H4V7h3V4h2v3h3z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__porting" viewBox="0 0 16 16">
        <Path d="M5 4v2h3.5l-3 3H0v7h7v-5.5l3-3V11h2V4H5z" />
        <Path d="M1 0v6h2V2h11v11h-4v2h6V0z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__power" viewBox="0 0 16 16">
        <Path d="M11 2.7V5c1.2.9 2 2.3 2 4 0 2.8-2.2 5-5 5s-5-2.2-5-5c0-1.6.8-3.1 2-4V2.7C2.6 3.8 1 6.2 1 9c0 3.8 3.2 7 7 7s7-3.2 7-7c0-2.8-1.6-5.2-4-6.3z" />
        <Path d="M7 1h2v6H7V1z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__question--circle-o" viewBox="0 0 16 16">
        <Path d="M7 11h2v2H7v-2zm4-5c0-1.7-1.3-3-3-3S5 4.3 5 6h2c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1L7 8v2h2V8.8c1.2-.4 2-1.5 2-2.8z" />
        <Path d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM8 2c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__question--circle" viewBox="0 0 16 16">
        <Path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 13H7v-2h2v2zm0-4.2V10H7V8l1-1c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1H5c0-1.7 1.3-3 3-3s3 1.3 3 3c0 1.3-.8 2.4-2 2.8z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__refresh-alt" viewBox="0 0 16 16">
        <Path d="M8 0C5.6 0 3.5 1.1 2 2.7V0H0v7h6V5H2.8c1-1.8 3-3 5.2-3 2.3 0 4.4 1.4 5.4 3.3l1.8-.9C13.8 1.8 11.1 0 8 0zm2 9v2h3.2c-1 1.8-3 3-5.2 3-2.3 0-4.4-1.4-5.4-3.3l-1.8.9C2.2 14.2 4.9 16 8 16c2.4 0 4.5-1.1 6-2.7V16h2V9h-6z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__refresh" viewBox="0 0 16 16">
        <Path d="M0 0h2v6H0z" />
        <Path d="M6 5v2H0V5z" />
        <Path d="M8 0C4.6 0 1.7 2.1.6 5.1l1.6 1.6C2.8 4 5.1 2 8 2c3.3 0 6 2.7 6 6s-2.7 6-6 6c-2 0-3.8-1-4.9-2.5l-1.4 1.4C3.1 14.8 5.4 16 8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__search" viewBox="0 0 16 16">
        <Path d="M11.7 10.3l4.3 4.3-1.4 1.4-4.3-4.3 1.4-1.4z" />
        <Path d="M7 14c3.8 0 7-3.2 7-7s-3.2-7-7-7-7 3.1-7 7 3.1 7 7 7zM7 2c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__server" viewBox="0 0 16 16">
        <Path d="M13 0H3L0 6h16l-3-6z" />
        <Path
          d="M0 15h16V8H0zm12.5-5a1.5 1.5 0 11-1.5 1.5 1.54 1.54 0 011.5-1.5zM2 11h6v1H2z"
          transform="translate(0 -1)"
        />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__service-plan" viewBox="0 0 16 16">
        <Path d="M9 1V0H7v1H5v2h6V1z" />
        <Path d="M12 1v3H4V1H2v15h12V1h-2zM4 6h4v2H4V6zm6 8H4v-2h6v2zm2-3H4V9h8v2z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__service-provider" viewBox="0 0 16 16">
        <Path d="M15.9 10.1c-.4-.7-1.5-.2-2 .1 0 0 .1-.5-.3-.7-.4-.2-1.2 0-1.5.4 0 0-.4-.5-.8-.5s-2 1-2.4 1.4c1 0 2.7-.3 2.7 1.3 0 .9-.5 1.3-2.3 1.3 0 0-1.8.1-2 0s-1.2-.3-2-1.2c0 0 1.2.3 2.1.3h2.4s.9.1.9-.4c0-.4-.9-.4-.9-.4s-2.4 0-3.5-1.4C5.8 9.7 5.3 9 4.6 9c-2-.1-2.8 1.7-4.6 1.7l.9 4.5s1.7-.9 2.7-.9c.7 0 3.3 1.7 4.4 1.7 2 0 7.4-4.6 7.4-4.6s.9-.6.5-1.3zM12 4.5v-1l-1.1-.2-.3-.9.6-.9-.7-.7-.9.6c-.2-.1-.6-.3-.9-.3L8.5 0h-1l-.2 1.1c-.3 0-.6.2-.9.4L5.6.8l-.8.7.6.9-.3.9-1.1.2v1l1.1.2.3.9-.6.9.7.7.9-.7c.3.2.6.3.9.4L7.5 8h1l.2-1.1c.3-.1.7-.2.9-.3l.9.7.7-.7-.7-.9c.2-.2.3-.6.4-.9l1.1-.3zm-4 1c-.8 0-1.5-.7-1.5-1.5S7.2 2.5 8 2.5s1.5.7 1.5 1.5S8.9 5.5 8 5.5z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__setting-cog-double" viewBox="0 0 16 16">
        <Path d="M16 10.7V9.3L14.3 9c-.2-.5-.3-1-.6-1.4l1-1.4-1-1-1.4 1c-.3-.2-.8-.4-1.3-.5L10.7 4H9.3L9 5.7c-.5.1-.9.2-1.4.5l-1.3-1-1.1 1 1 1.4c-.2.5-.4.9-.5 1.4L4 9.3v1.5l1.7.2c.2.5.3 1 .6 1.4l-1 1.4 1 1 1.4-1c.3.2.8.4 1.3.5l.3 1.7h1.5l.3-1.7c.5-.2 1-.3 1.4-.6l1.4 1 1-1-1-1.4c.2-.4.5-.9.6-1.4l1.5-.2zM10 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 1.8L8.2 1 7 1.8c-.3-.1-.8-.3-1.2-.4L5.6 0H4.4l-.2 1.4c-.4.1-.8.2-1.2.4L1.9 1l-.9.8.8 1.2c0 .1-.1.1-.1.2-.2.3-.3.6-.4 1L0 4.4v1.2l1.4.2c.1.3.2.6.3.8 0 .1 0 .1.1.1 0 .1.1.1.1.2L1 8.2l.8.8L3 8.1l1.2-.9-.2-1c-.4-.2-.7-.7-.7-1.2 0-.9.7-1.7 1.7-1.7.5 0 1 .2 1.3.6h1.2l.6-.9.9-1.2z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__setting-cog" viewBox="0 0 16 16">
        <Path d="M16 9V7l-2.2-.4c-.2-.6-.4-1.3-.7-1.8L14.4 3 13 1.6l-1.8 1.3c-.5-.3-1.2-.6-1.8-.7L9 0H7l-.4 2.2c-.6.1-1.2.4-1.8.7L3.1 1.6 1.6 3l1.3 1.8c-.3.6-.6 1.2-.7 1.8L0 7v2l2.2.4c.2.6.4 1.3.7 1.8L1.6 13 3 14.4l1.8-1.3c.5.3 1.2.6 1.8.7L7 16h2l.4-2.2c.6-.2 1.3-.4 1.8-.7l1.8 1.3 1.4-1.4-1.3-1.8c.3-.5.6-1.2.7-1.8L16 9zm-8 2c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__shopping-cart" viewBox="0 0 16 16">
        <Path d="M14 12.1V11H6.2l-.4-1.4h8.3L16 3H4l-.5-2H0v2h2l2.5 9.3c-.3.3-.5.7-.5 1.2 0 .8.7 1.5 1.5 1.5S7 14.3 7 13.5c0-.2 0-.3-.1-.5h5.2c-.1.2-.1.3-.1.5 0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5c0-.7-.4-1.2-1-1.4z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__speaking" viewBox="0 0 16 16">
        <Path d="M1.7 2.8C3 1.7 5.2 2 5.8 2.1c0 0 2 .3 2.8 1.9 0 0 .3.6.4.9.1.2.1.4.1.7 0 .3-.1.7-.1.8s-.1.3.1.5c.2.3.6.9.7 1s.3.5.2.7c-.1.2-.8.3-.7.4 0 .2.1.4.1.6-.1.2-.9.2-.9.4s.9.3.7.5c-.1.1-.2.3-.1.6.1.5-.2.9-.6 1-.5.1-1.6.1-1.8.6-.2.4-.2 1.3-.2 1.3H1.2s.7-1.4.3-3.5-1.8-1.7-1.4-5c0 0 .3-1.6 1.6-2.7zM11 8h1v4h-1V8zm2-1h1v6h-1V7zm2-1h1v8h-1V6z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__star" viewBox="0 0 16 16">
        <Path d="M8 12.6L3.7 15l.8-5.1L1 6.3l4.8-.7L8 1l2.2 4.6 4.8.7-3.5 3.6.8 5.1z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__stop--circle" viewBox="0 0 16 16">
        <Path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3 11H5V5h6v6z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__terminal" viewBox="0 0 16 16">
        <Path d="M0 2v12h16V2H0zm2.9 7L2 8.2l1.7-1.7L2 4.8l.9-.9 1.7 1.7.8.9-.8.8L2.9 9zM9 10.5H5V9h4v1.5z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__thumbs-down" viewBox="0 0 16 16">
        <Path d="M16 6.8c0-.2 0-.4-.1-.6L13.7.9C13.5.4 13 0 12.4 0H5.5C4.7 0 4 .7 4 1.5V9c0 .4.2.8.4 1.1L10 15l.8-.8c.2-.2.3-.5.3-.8v-.2L10 10h4.5c.8 0 1.5-.7 1.5-1.5V6.8zM0 11h3V1H0v10z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__thumbs-up" viewBox="0 0 16 16">
        <Path d="M16 6.5c0-.8-.7-1.5-1.5-1.5H10l1.1-3.2v-.2c0-.3-.1-.6-.3-.8L10 0 4.4 4.9c-.2.3-.4.7-.4 1.1v7.5c0 .8.7 1.5 1.5 1.5h6.9c.6 0 1.1-.4 1.3-.9l2.2-5.3c.1-.2.1-.4.1-.6V6.5zM0 16h3V6H0v10z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__trash-x" viewBox="0 0 16 16">
        <Path d="M11 1l-1-1H6L5 1H2v2h12V1h-3zm2 15H3V4h10v12zM4.8 8.2L6.6 10l-1.8 1.8 1.4 1.4L8 11.4l1.8 1.8 1.4-1.4L9.4 10l1.8-1.8-1.4-1.4L8 8.6 6.2 6.8 4.8 8.2z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__trash" viewBox="0 0 16 16">
        <Path d="M11 1l-1-1H6L5 1H2v2h12V1h-3zm2 15H3V4h10v12z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__two-way" viewBox="0 0 16 16">
        <Path d="M15 7V5H5.8l2.6-2.6L6.9 1 1 7h14zM1 9v2h9.2l-2.6 2.6L9.1 15 15 9H1z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__unassign" viewBox="0 0 16 16">
        <Path d="M12 9v5H2V4h5V2H0v14h14V9h-2z" />
        <Path d="M16 7h-2V3.5L8.4 9 7 7.6 12.5 2H9V0h7z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__upgrade" viewBox="0 0 16 16">
        <Path d="M1 0h14v2H1zm4 14h6v2H5zm2-7.2V12h2V6.8l1.8 1.8 1.4-1.4-2.8-2.8L8 3 6.6 4.4 3.8 7.2l1.4 1.4z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__upload-cloud" viewBox="0 0 16 16">
        <Path d="M6.6 8.5l-3 3.1L5 13l2-2.1V16h2v-5.1l2 2.1 1.4-1.4-3-3.1L8 7.1z" />
        <Path d="M10 5.1c.1.4.5.8 1 .8h.8c.7 0 1.4.3 1.8.9.3.5.5 1.1.4 1.6-.1.3-.2.6-.3.8l.2.2 1.2 1.2c.4-.5.8-1.2.9-1.9.2-1.1-.1-2.2-.7-3.1-.8-1.1-2.1-1.8-3.4-1.8h-.1c-.5-1.2-1.4-2.3-2.6-3C7.8 0 6.1-.2 4.6.2 3 .6 1.7 1.6.9 3 0 4.4-.2 6 .2 7.6c.2.9.7 1.8 1.3 2.5l1.4-1.4c-.4-.5-.6-1-.8-1.5C1.9 6 2 4.9 2.6 4c.5-.9 1.4-1.6 2.5-1.9 1-.2 2.1-.1 3.1.5.9.5 1.6 1.4 1.8 2.5z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__upload" viewBox="0 0 16 16">
        <Path d="M16 14v-3h-2v3H2v-3H0v5h16v-2z" />
        <Path d="M7 4.8V12h2V4.8l1.8 1.9 1.4-1.5L8 1 3.8 5.2l1.4 1.5z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__user-admin-plus" viewBox="0 0 16 16">
        <Circle cx={8} cy={4} r={4} />
        <Path d="M1 8l-1 8h6L2.8 8zm15 6h-2v2h-2v-2h-2v-2h2v-2h2v2h2zm-6-3L8 9l-2 2 2 5v-5z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__user-admin" viewBox="0 0 16 16">
        <Circle cx={8} cy={4} r={4} />
        <Path d="M8 9l-2 2 2 5 2-5-2-2zm5.2-1L10 16h6l-1-8h-1.8zM1 8l-1 8h6L2.8 8H1z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__user-group-admin" viewBox="0 0 16 16">
        <Path d="M8 11l-1.4 1.4L8 16l1.6-3.6zm-6-1l-1 6h5.6l-2.4-6zm2.6-5.1c.3-.5.8-1 1.3-1.3.1-.2.1-.4.1-.6 0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2c.2 0 .4 0 .6-.1zM4 7c0-.4.1-.7.1-1H4c-.9 0-1.7-.4-2.2-1H1L0 9h4.6C4.2 8.4 4 7.7 4 7zm8-6c-1.1 0-2 .9-2 2 0 .2 0 .4.1.6.5.3 1 .8 1.3 1.3.2.1.4.1.6.1 1.1 0 2-.9 2-2s-.9-2-2-2z" />
        <Circle cx={8} cy={7} r={3} />
        <Path d="M16 9l-1-4h-.8c-.5.6-1.3 1-2.2 1h-.1c0 .3.1.6.1 1 0 .7-.2 1.4-.6 2H16zm-2 1h-2.1l-2.5 6H15l-1-6z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__user-group" viewBox="0 0 16 16">
        <Path d="M11.5 9c-.1 0-.1 0 0 0-.7 1.2-2 2.1-3.5 2.1S5.3 10.3 4.6 9c-.4.1-2.6.8-2.6 4.7C2 15.8 5 16 8 16s6-.2 6-2.3c0-3.9-2.2-4.6-2.5-4.7z" />
        <Circle cx={8} cy={7} r={3} />
        <Path d="M12 1c-1.1 0-2 .9-2 2 0 .2 0 .4.1.6.5.3 1 .8 1.3 1.3.2.1.4.1.6.1 1.1 0 2-.9 2-2s-.9-2-2-2zM4.6 4.9c.3-.5.8-1 1.3-1.3.1-.2.1-.4.1-.6 0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2c.2 0 .4 0 .6-.1zM4 8.1h.1c0-.4-.1-.7-.1-1.1 0-.5.1-.9.2-1.3H4c-1 0-1.8-.5-2.3-1.2-.2 0-1.7.5-1.7 3 0 1 1.1 1.3 2.5 1.5.7-.7 1.3-.9 1.5-.9zm10.3-3.6c-.5.7-1.3 1.3-2.3 1.3h-.2c.1.3.2.7.2 1.2 0 .4-.1.7-.1 1h.2c.2 0 .9.2 1.5.9 1.3-.1 2.4-.4 2.4-1.4 0-2.5-1.5-3-1.7-3z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__user-plus" viewBox="0 0 16 16">
        <Circle cx={8} cy={4} r={4} />
        <Path d="M16 14h-2v2h-2v-2h-2v-2h2v-2h2v2h2zm-6-4.9c-.6.2-1.3.4-2 .4-1.9 0-3.6-1-4.6-2.5-.5.1-3.4 1-3.4 6 0 2.7 4 3 8 3v-5h2V9.1z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__user" viewBox="0 0 16 16">
        <Path d="M12.6 7c-1 1.5-2.7 2.5-4.6 2.5S4.4 8.5 3.4 7C2.9 7.1 0 8 0 13c0 2.7 4 3 8 3s8-.3 8-3c0-5-2.9-5.9-3.4-6z" />
        <Circle cx={8} cy={4} r={4} />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__video" viewBox="0 0 16 16">
        <Path d="M16 4l-4 2V4c0-.6-.4-1-1-1H1c-.6 0-1 .5-1 1v8c0 .6.4 1 1 1h10c.6 0 1-.4 1-1v-2l4 2V4z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__video-slash" viewBox="0 0 16 16">
        <Path d="M12 6l4-2v8l-4-2v2c0 .6-.4 1-1 1H4l-3 3-1-1L15 0l1 1-4 4v1zm-2-3H1c-.6 0-1 .5-1 1v8c0 .3.1.5.3.7L10 3z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__voicemail" viewBox="0 0 16 16">
        <Path d="M12.5 4C10.6 4 9 5.6 9 7.5c0 .5.1 1 .3 1.5H6.7c.2-.5.3-1 .3-1.5C7 5.6 5.4 4 3.5 4S0 5.6 0 7.5 1.6 11 3.5 11h9c1.9 0 3.5-1.6 3.5-3.5S14.4 4 12.5 4zm-9 5C2.7 9 2 8.3 2 7.5S2.7 6 3.5 6 5 6.7 5 7.5 4.3 9 3.5 9zm9 0c-.8 0-1.5-.7-1.5-1.5S11.7 6 12.5 6s1.5.7 1.5 1.5S13.3 9 12.5 9z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__volume-1" viewBox="0 0 16 16">
        <Path d="M12 8c0-1.5-.8-2.8-2-3.5v7.1c1.2-.8 2-2.1 2-3.6zM8 0L3 5H0v6h3l5 5V0z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__volume-2" viewBox="0 0 16 16">
        <Path d="M16 8c0 3.8-2.5 7-6 7.9V14c2.5-.9 4.2-3.2 4.2-6S12.5 2.8 10 2V.1c3.5.9 6 4.1 6 7.9zm-4 0c0-1.5-.8-2.8-2-3.5v7.1c1.2-.8 2-2.1 2-3.6zM8 0L3 5H0v6h3l5 5V0z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__volume-slash" viewBox="0 0 16 16">
        <Path
          className="telicon-3_0_0_svg__st0"
          d="M14.2 2.8C15.3 4.2 16 6 16 8c0 3.8-2.5 7-6 7.9V14c2.5-.9 4.2-3.2 4.2-6 0-1.5-.5-2.8-1.3-3.9l-1.6 1.6c.4.7.7 1.4.7 2.3 0 1.5-.8 2.8-2 3.5V7L8 9v7l-3.5-3.5L1 16l-1-1L15 0l1 1-1.8 1.8zM12 1c-.6-.4-1.3-.7-2-.9V2c.2.1.5.2.7.3L12 1zM8 5V0L3 5H0v6h2l6-6z"
        />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__volume-x" viewBox="0 0 16 16">
        <Path d="M8 0L3 5H0v6h3l5 5V0zm6.7 11L13 9.3 11.3 11 10 9.7 11.7 8 10 6.3 11.3 5 13 6.7 14.7 5l1.2 1.2-1.7 1.7L16 9.7 14.7 11z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__warning--circle" viewBox="0 0 16 16">
        <Path d="M8 0a8 8 0 108 8 8 8 0 00-8-8zm1 12H7v-2h2zm0-3H7V4h2z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__warning--circle-o" viewBox="0 0 16 16">
        <Path d="M8 0a8 8 0 108 8 8 8 0 00-8-8zm0 14a6 6 0 116-6 6 6 0 01-6 6z" />
        <Path d="M7 10h2v2H7z" />
        <Path d="M7 4h2v5H7z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__warning--octagon" viewBox="0 0 16 16">
        <Path d="M11.3 0H4.7L0 4.7v6.6L4.7 16h6.6l4.7-4.7V4.7zM9 12H7v-2h2zm0-3H7V4h2z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__warning--triangle-o" viewBox="0 0 16 16">
        <Path d="M8 2.3l6.3 12.2H1.7L8 2.3M8 0c-.3 0-.6.2-.9.7L.2 14.2c-.5 1 0 1.8 1.1 1.8h13.4c1.1 0 1.6-.8 1.1-1.8L8.9.7C8.6.2 8.3 0 8 0z" />
        <Path d="M7 11h2v2H7zm0-5h2v4H7z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__warning--triangle" viewBox="0 0 16 16">
        <Path d="M15.8 14.2L8.9.7C8.6.2 8.3 0 8 0s-.6.2-.9.7L.2 14.2c-.5 1 0 1.8 1.1 1.8h13.4c1.1 0 1.6-.8 1.1-1.8zM9 13H7v-2h2v2zm0-3H7V5h2v5z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__x--circle-o" viewBox="0 0 16 16">
        <Path d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM8 2c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6z" />
        <Path d="M11.5 10.1L9.4 8l2.1-2.1-1.4-1.4L8 6.6 5.9 4.5 4.5 5.9 6.6 8l-2.1 2.1 1.4 1.4L8 9.4l2.1 2.1z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__x--circle" viewBox="0 0 16 16">
        <Path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__x--octagon" viewBox="0 0 16 16">
        <Path d="M11.3 0H4.7L0 4.7v6.6L4.7 16h6.6l4.7-4.7V4.7zm.2 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8z" />
      </Symbol>
      <Symbol id="telicon-3_0_0_svg__x" viewBox="0 0 16 16">
        <Path d="M11.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8z" />
      </Symbol>

      {children}
    </Svg>
  );
}

export default SvgTelicon300;
