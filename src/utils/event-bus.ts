const EventBus = {
  on(event: string, callback: (e: any) => void) {
    document.addEventListener(event, (e1) => callback(e1));
  },
  dispatch(event: string, message: any) {
    document.dispatchEvent(new CustomEvent(event, { detail: message }));
  },
  remove(event: string, callback: any) {
    document.removeEventListener(event, callback);
  },
};

export default EventBus;
