import { useContext, useEffect, useState } from 'react'
import Topsection from './components/Topsection'
import Dropdown from '../../../components/Dropdown'
import FileUpload from '../../../components/FileUpload'
import { ADDPRODUCT } from '../../../services/operations/adminApi'

import { toast } from 'sonner'
import EditorComponent from '../../../components/CKEEditor'

import { AuthContext } from '../../../auth/AuthContext'

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio, Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { CREATEMEMBERSHIP, GETPLANS } from '../../../services/operations/membershipApi'



function CreateProduct() {

  const { user } = useContext(AuthContext);


  const [gallery, setGallery] = useState([]);
  const [attachments, setAttachment] = useState([]);
  const [progress, setProgress] = useState(0);
  const [productName, setProductName] = useState('')
  const [category, setCategory] = useState({ value: "", name: "" });
  const [description, setDescription] = useState('')

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  }


  const handleChange = (value) => {
    setCategory(value);
  }

  const handleGallary = async (files) => {
    if (!files || files.length === 0) return;
    try {
      const promises = Array.from(files).map(file => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();

          reader.onload = () => resolve({ fileName: file.name, url: reader.result });
          reader.onerror = error => reject(error);

          reader.readAsDataURL(file);
        });
      });
      const base64Results = await Promise.all(promises);
      setGallery(base64Results);
    } catch (error) {
      console.error('Error converting files to base64:', error);
      toast.error(error.message)
    }
  }

  const handleRemoveGallary = async (e, i) => {
    let list = [...gallery];
    // let res = await DELETEUPLOADS(list[i].filename);
    // if (res.status) {
    list.splice(i, 1);
    setGallery(list);
    toast.success('Image removed successfully')
    // }
  }

  const handleRemoveAttachments = async (e, i) => {
    let list = [...attachments];
    // let res = await DELETEUPLOADS(list[i].filename)
    // if (res.status) {
    list.splice(i, 1);
    setAttachment(list);
    toast.success('Attachments removed successfully')
    // }
  }

  const handleAttachments = async (files) => {
    if (!files || files.length === 0) return;
    try {
      const promises = Array.from(files).map(file => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();

          reader.onload = () => resolve({ fileName: file.name, url: reader.result });
          reader.onerror = error => reject(error);

          reader.readAsDataURL(file);
        });
      });
      const base64Results = await Promise.all(promises);
      setAttachment(base64Results);
    } catch (error) {
      console.error('Error converting files to base64:', error);
      toast.error(error.message)
    }
  }

  const handlePostProduct = async (e) => {
    e.preventDefault();

    // const user = await GET_VALID_USER()
    console.log(user, "jhgjhgjhf");

    if (user.isSubscribed || user.role === "ADMIN") {
      if (productName === '') {
        toast.error('Please enter product name!');
        return
      }
      if (category.value === '') {
        toast.error('Please select category!')
        return;
      }
      if (description === '') {
        toast.error('Please enter description!')
        return;
      }
      if (gallery.length < 1) {
        toast.error('At least one product image is required!');
        return;
      }
      const images = [...gallery].map((item) => ({ path: item.path, name: item.name, url: item.url, type: "GALLARY" }));
      const _attachments = [...attachments].map((item) => ({ path: item.path, name: item.name, url: item.url, type: "ATTACHMENTS" }));

      const res = await ADDPRODUCT({ name: productName, description, category: category.id, images, _attachments });

      if (res.status) {
        setAttachment([]);
        setGallery([]);
        setCategory('');
        setDescription('');
        setProductName('');
        handleClearDropdown();
        toast.success('Product added successfully!')
      }
    } else {
      handleOpen()
    }
  }

  // console.log(category);

  const handleEditorChange = (content) => {
    setDescription(content);
  }
  const handleClearDropdown = () => {
    setCategory({ value: '', name: "" })
  }



  return (
    <div className="relative bg-[#F8FAFD]">
      <div className="max-w-[1200px] mx-auto py-6 lg:py-14">
        <div className='relative'>
          <div className=''>
            <Topsection title={"Post Your Product"} />
            <div className='bg-[#FDFDFE] px-2 py-4 lg:p-10 '>
              <form>
                <div>
                  <h3 className='lg:text-3xl text-[#374B5C] font-semibold'>General info</h3>
                  <div className='mt-4 lg:mt-8 flex flex-col'>
                    <label className='text-primary lg:text-lg font-semibold mb-2 lg:mb-4 ml-1 lg:ml-4' htmlFor="productName">Product Name <span>*</span></label>
                    <input type="text" className='border border-[#D5E3EE] flex justify-between items-center p-2 lg:p-4 gap-4 rounded-md focus:outline-none' name='productName' value={productName} onChange={(e) => setProductName(e.target.value)} />
                  </div>
                  <div className='mt-4 lg:mt-8 flex flex-col lg:max-w-72'>
                    <label className='text-primary lg:text-lg font-semibold mb-2 lg:mb-4 ml-1 lg:ml-4'>Category <span>*</span></label>
                    <Dropdown defaultValue={"Category"} label={"Category"} onChange={handleChange} setCategory={setCategory} category={category} onClear={handleClearDropdown} />
                  </div>
                  <div className='mt-4 lg:mt-8 flex flex-col '>
                    <label className='text-primary lg:text-lg font-semibold mb-2 lg:mb-4 ml-1 lg:ml-4'>Description <span>*</span></label>
                    {/* <TextEditor style={{ outerWidth: "100%" }} onEditorChange={handleTextEditor} defaultValue={''}/> */}
                    <EditorComponent data={description} onChange={handleEditorChange} style={{ outerWidth: "100%" }} id={'createProduct'} />
                  </div>
                  <div className='mt-8 flex flex-col '>
                    <label className='text-primary lg:text-lg font-semibold mb-2 lg:mb-4 ml-1 lg:ml-4'>Gallery <span>*</span></label>
                    <FileUpload progress={progress} onUploadFile={handleGallary} handleRemove={handleRemoveGallary} type={"images"} name={"Gallery"} id={"Gallery"} files={gallery} setFiles={setGallery} />
                  </div>
                  <div className='mt-8 flex flex-col '>
                    <label className='text-primary lg:text-lg font-semibold mb-2 lg:mb-4 ml-1 lg:ml-4'>Attachments </label>
                    <FileUpload progress={progress} onUploadFile={handleAttachments} handleRemove={handleRemoveAttachments} type={"files"} name={"Attachments"} id={"Attachments"} files={attachments} setFiles={setAttachment} />
                  </div>
                  <div className='mt-8 flex lg:justify-end justify-center'>
                    <div>
                      <div className='post_product_button'>
                        <button onClick={handlePostProduct} className='bg-helper px-4  py-3 rounded-md flex items-center justify-between  gap-4 button'>
                          <span className='text-nowrap text-white font-medium mr-4'>Post Your Product</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 12 12" fill="none">
                            <path d="M5.00488 11.525V7.075H0.854883V5.125H5.00488V0.65H7.00488V5.125H11.1549V7.075H7.00488V11.525H5.00488Z" fill="#fff"></path></svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <SubscriptionModal handleOpen={handleOpen} isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateProduct;



export const SubscriptionModal = ({ isOpen, onClose, children }) => {

  const { user, setUser } = useContext(AuthContext)
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [activeTab, setActiveTab] = useState("Plans");
  const [PaymentType, setPaymentType] = useState('monthly');
  const handleToggle = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setPaymentType(e.target.value)
  };

  const [isLoading, setIsLoading] = useState(false)

  const handlePayment = async () => {
    setIsLoading(true);
    const amount = PaymentType === "onetime" ? plans[0]?.offerValue : plans[0]?.price
    const res = await CREATEMEMBERSHIP({ planId: selectedPlan, amount: amount });
    if (res?.status) {
      setUser({ ...user, isSubscribed: true });
      onClose();
      setIsLoading(false);
      toast.success(res.message);
    } else {
      onClose();
      setIsLoading(false);
    }
  }

  let tabs = [
    {
      id: "Plans",
      label: "Plans",
      content: <>
        <RadioGroup
          className='relative'
          value={selectedPlan}
          onValueChange={setSelectedPlan}
          label="Select your favorite subscription plan"
        >
          {plans.map((plan) => (
            <label htmlFor={plan.id} className={`p-4 className='w-full rounded-lg mt-4 flex ${selectedPlan === plan.id ? "ring ring-blue-600" : "ring-1 ring-light"}`} key={plan.id}>
              <Radio className="" value={plan.id} id={plan.id} />
              <div className='flex justify-between w-full'>
                <h2 className="text-lg text-primary font-bold">{plan.name}</h2>
                <h2 className="text-lg text-primary font-bold ml-20">Price: ${plan.price}/Month</h2>
              </div>
            </label>
          ))}
        </RadioGroup>
      </>
    },
    {
      id: "Offers",
      label: "Offers",
      content: <CheckoutPage plans={plans.filter((plan) => plan.id === selectedPlan)} PaymentType={PaymentType} setPaymentType={setPaymentType} handleToggle={handleToggle} />
      // content: <MembershipPurchase _planID={selectedPlan} />
    },
    {
      id: "Checkout",
      label: "Checkout",
      content: <div className='flex justify-center items-center w-full mt-4'>
        <div className='grid grid-cols-2 w-full gap-4'>
          <p className=" text-light font-bold ">Plane Name: <span className='text-lg font-medium text-primary '>{plans[0]?.name}</span></p>
          <p className=" text-light font-bold ">Offer Type: <span className='text-lg font-medium text-primary '>{"Payment"}</span></p>
          <p className=" text-light font-bold ">Payment Type: <span className='text-lg font-medium text-primary '>{PaymentType}</span></p>
          <p className=" text-light font-bold ">Plan Duration: <span className='text-lg font-medium text-primary '>{`${plans[0]?.duration} ${plans[0]?.priceRate}`}</span></p>
          <p className=" text-light font-bold ">Payable Amount: <span className='text-lg font-medium text-primary '>{` $${PaymentType === "onetime" ? plans[0]?.offerValue : plans[0]?.price}`}</span></p>
          <Button isLoading={isLoading} className='col-span-2 mx-40 mt-10' variant='shadow' color='primary' onClick={handlePayment}>Proceed To Payment</Button>
        </div>
      </div>
    }
  ];

  // console.log(plans);


  const fetchPlans = async () => {
    const response = await GETPLANS();
    console.log(response);
    const data = await response.plans;

    setPlans(data);
  };

  const handleCheckout = () => {
    console.log(selectedPlan);
    setActiveTab("Offers")
  }

  useEffect(() => {
    fetchPlans();
  }, [])

  return (
    <>
      {/* <div className="flex flex-wrap gap-3">
        {sizes.map((size) => (
          <Button key={size} onPress={() => handleOpen(size)}>Open {size}</Button>
        ))}
      </div> */}
      <Modal
        size={"3xl"}
        isOpen={isOpen}
        onClose={() => {
          setActiveTab("Plans");
          setIsLoading(false);
          setPaymentType('monthly');
          setSelectedPlan(null)
          onClose()
        }}
        isDismissable={false} isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"><h2 className="text-lg text-primary font-bold">Subscribe Now</h2></ModalHeader>
              <ModalBody>
                <div className='flex flex-col items-center'>
                  <Tabs
                    aria-label="Dynamic tabs"
                    items={tabs}
                    variant='bordered'
                    radius='full'
                    color='secondary'
                    selectedKey={activeTab}
                  // onSelectionChange={setSelected}
                  >
                    {(item) => (
                      <Tab key={item.id} title={<p>{item.label}</p>} className='w-full'>
                        {/* <Card >
                          <CardBody> */}
                        {item.content}
                        {/* </CardBody>
                        </Card> */}
                      </Tab>
                    )}
                  </Tabs>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" isLoading={false} variant="light" onPress={onClose}>
                  <p>Close</p>
                </Button>
                {activeTab === "Offers" && <Button isLoading={false} color="danger" variant="ghost" onPress={() => setActiveTab('Plans')}>
                  <p>Prev</p>
                </Button>}
                {activeTab === "Checkout" && <Button isLoading={false} color="danger" variant="ghost" onPress={() => setActiveTab('Offers')}>
                  <p>Prev</p>
                </Button>}
                {activeTab !== "Checkout" && (activeTab === 'Offers' ? <Button color="primary" isLoading={false} isDisabled={selectedPlan === null} onPress={() => setActiveTab("Checkout")}>
                  <p>Proceed To Checkout</p>
                </Button> :
                  <Button color="primary" isLoading={false} isDisabled={selectedPlan === null} onPress={handleCheckout}>
                    <p>Next</p>
                  </Button>)}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export const CheckoutPage = ({ plans, PaymentType, handleToggle, setPaymentType }) => {

  return (
    <div className='w-full flex justify-center'>
      <div className="modal">
        <form className="form">
          <div className="banner-membership" />
          <label className="title">Offers</label>
          <p className="description m-auto">
            Auto Withdrawal are available for monthly fee payments.
          </p>
          <div className='w-full flex justify-center items-center mt-5'>
            <div className="flex w-fit py-2 gap-2 px-2  bg-light bg-opacity-60 rounded-[30px] shadow-2xl">
              <label className={`bg-white px-6 py-2 rounded-[30px] text-primary font-medium text-center cursor-pointer hover:ring-2 hover:ring-helper ${PaymentType === 'monthly' && 'shadow-md ring-2 ring-blue-600'}`} htmlFor="monthly">Monthly
                <input type="radio" name="membership" id="monthly" className="hidden" value={'monthly'} checked={PaymentType === 'monthly'} onChange={handleToggle} />
              </label>
              <label className={`bg-white px-6 py-2 rounded-[30px] text-primary font-medium text-center cursor-pointer hover:ring-2 hover:ring-helper ${PaymentType === 'onetime' && 'shadow-md ring-2 ring-blue-600'}`} htmlFor="onetime">One Time
                <input type="radio" name="membership" id="onetime" className="hidden" value={'onetime'} checked={PaymentType === 'onetime'} onChange={handleToggle} />
              </label>
            </div>
          </div>

          <div className='lg:flex lg:items-center lg:justify-between'>
            <div className="benefits w-full">
              <span className='text-primary'>What we offer</span>
              <ul className='w-full'>
                {/* {isPending && [...Array(3)].map((feature, index) => (
                  <li key={index} className="flex bg-light bg-opacity-60 items-center gap-2 animate-pulse h-5 rounded-3xl w-full"></li>
                ))} */}
                {plans[0]?.features?.map((feature, index) =>
                  <li key={index}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 16"
                      height={16}
                      width={16}
                    >
                      <rect className='fill-primary' rx={8} height={16} width={16} />
                      <path
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                        stroke="white"
                        d="M5 8.5L7.5 10.5L11 6"
                      />
                    </svg>
                    <span className='text-primary'>{feature.feature.name}</span>
                  </li>
                )
                }
              </ul>
            </div>
            {PaymentType === 'onetime' &&
              <div className='flex justify-center items-center w-1/2'>
                <div className='bg-helper size-20 rounded-full flex justify-center items-center  text-center text-white font-bold shadow-lg'>
                  <span className=' text-center p-5'>Saved 31%</span>
                </div>
              </div>}
          </div>
          <div className="modal--footer">
            {
              PaymentType === 'onetime' &&
              <>
                <label className="text-nowrap text-lg font-bold lg:text-2xl lg:font-extrabold">
                  <span className=''>Total: $</span>{plans[0]?.offerValue} only
                </label>

                {/* <button onClick={(e) => handleCheckout(e)} className="bg-secondary text-white font-medium leading-10 rounded-md h-10 px-6 hover:bg-opacity-70 shadow-md text-nowrap">Proceed To Checkout</button> */}
              </>
            }
            {PaymentType === 'monthly' &&
              <div className='w-full '>
                <div className={`flex justify-end items-start`}>
                  {/* {isPending ? [...Array(3)].map((feature, index) => (
                    <li key={index} className="flex bg-light bg-opacity-60 items-center gap-2 animate-pulse h-5 rounded-3xl w-full mt-2"></li>
                  )) : */}
                  <table className=''>
                    <tbody className='rounded '>
                      <tr className='text-end text-primary'>
                        <th className='p-2 '>Price</th>
                        <td className='p-2 text-sm font-medium text-primary'>${plans[0]?.price} per {plans[0]?.priceRate} </td>
                      </tr>
                      <tr className='text-end text-primary border-b'>
                        <th className='p-2 '>Plan Duration</th>
                        <td className='p-2  text-sm font-medium text-primary'>{plans[0]?.duration} {plans[0]?.priceRate}</td>
                      </tr>
                      <tr className='text-end text-primary'>
                        <th className='p-2 text-lg font-bold'>Total Amount</th>
                        <td className='p-2  text-sm font-medium text-primary'>{plans[0]?.duration} X {plans[0]?.price} = <span className='text-lg font-bold'>${plans[0]?.price * plans[0].duration}</span></td>
                      </tr>
                    </tbody>
                  </table>
                  {/* } */}
                </div>
                <hr />
                {/* <div>
                  <button onClick={(e) => handleCheckout(e)} className="bg-secondary w-full mt-4 text-white font-medium leading-10 rounded-md h-10 px-6 hover:bg-opacity-70 shadow-md">Proceed To Checkout</button>
                </div> */}
                <p className="text-center text-balance mt-4 mx-auto px-4 py-2 rounded-full bg-secondary text-white">
                  Save upto 31% on onetime payment.
                </p>
              </div>}
          </div>
        </form>
      </div>
    </div>
  )
}