import React from 'react';
import ErrorToast, { IErrorToastProps } from './ErrorToast';
import CopyClipboardToast from './CopyClipboardToast';
import NetworkErrorToast from './NetworkErrorToast';
import SuccessToast, { ISuccessToastProps } from './SuccessToast';

export const COPY_CLIPBOARD = 'copyClipboard';
export const ERROR = 'toastError';
export const NETWORK_ERROR = 'networkError';
export const SUCCESS = 'toastSuccess';

export const toastConfig = {
  toastError: ({ props }: {props: IErrorToastProps}) => (
    <ErrorToast title={props.title} description={props.description} />
  ),
  copyClipboard: () => (
    <CopyClipboardToast />
  ),
  networkError: () => (
    <NetworkErrorToast />
  ),
  toastSuccess: ({ props }: {props: ISuccessToastProps}) => (
    <SuccessToast title={props.title} description={props.description} />
  ),
};
