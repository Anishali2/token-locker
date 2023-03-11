import { Popover, Transition } from '@headlessui/react';
import { useState } from 'react';

interface IToolTip {
  children: React.ReactNode;
  tooltip: string;
  cursor?: boolean;
}
export default function ToolTip({
  tooltip = 'Address',
  children,
  cursor,
}: IToolTip) {
  const [open, setOpen] = useState(false);

  return (
    <div className=" ">
      <Popover>
        <>
          <div className="flex">
            <span
              className={` ${cursor ? ' cursor-pointer' : ''}`}
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              {children}
            </span>
          </div>
          <Transition
            show={open}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-0"
            enterTo="opacity-100 translate-y-1"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-1"
            leaveTo="opacity-0 translate-y-0"
          >
            <Popover.Panel className="absolute left-[80%]  z-10  -translate-x-1/2 transform px-4 sm:px-0 ">
              <div className="overflow-hidden rounded-md border border-secondary shadow-lg ring-1 ring-black ring-opacity-5">
                <div className=" bg-indigo-400 text-white whitespace-nowrap p-2 w-fit text-sm">
                  {tooltip}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      </Popover>
    </div>
  );
}
